# API Layer Developer Guide

This document provides a guide for developers on the architecture of the `/apis` directory and the patterns to follow for interacting with the backend API.

## 1. Core Principles

The API layer is designed to be modular, consistent, and easy to maintain. It follows three core principles:

1.  **One Module Per Resource**: Each backend resource (e.g., products, users, orders) gets its own dedicated file in the `/apis` directory (e.g., `products.ts`). This keeps the code organized and easy to navigate.
2.  **Hooks-First Approach**: All data fetching and mutations are exposed through custom **TanStack Query** hooks (`useQuery`, `useMutation`). This is the **only** way components should interact with the API, as it centralizes server state management, caching, and side effects.
3.  **Centralized Export**: A single, unified `api` object is exported from `apis/index.ts`. This object provides a consistent entry point for the entire application to access any API module.

## 2. Directory Structure

The structure is simple and scalable. Each file represents a resource module.

```
/apis
├── auth/             # Optional grouping for related modules
│   └── ...
├── resourceA.ts      # e.g., product.ts
├── resourceB.ts      # e.g., order.ts
└── index.ts          # The central aggregator and exporter
```

## 3. How to Use an Existing API Module

All interactions are done through the global `api` object imported from `@/apis`. The pattern is `api.ResourceName.actionName`.

### Fetching Data with `useQuery`

To fetch data, find the appropriate resource and action. The hook handles loading states, errors, and caching automatically.

**Example**: Fetching all products.

```tsx
import api from '@/apis';
import { Spinner } from '@/components/ui/spinner';

function ProductList() {
  // Access the 'product' resource and the 'getAll' query
  const { data: products, isLoading, isError } = api.Product.getAll.useQuery();

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error fetching products.</div>;

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
```

### Modifying Data with `useMutation`

To create, update, or delete data, use the corresponding `useMutation` hook. Call the returned `mutate` function with the required payload.

**Example**: Creating a new product.

```tsx
import api from '@/apis';
import { Button } from '@/components/ui/button';
import { ProductFormType } from '@/apis/product'; // Assuming type is exported

function CreateProductButton() {
  // Access the 'product' resource and the 'create' mutation
  const { mutate, isPending } = api.Product.create.useMutation();

  const handleCreate = () => {
    const newProduct: ProductFormType = {
      name: 'New Gadget',
      price: 99.99,
    };
    mutate(newProduct);
  };

  return (
    <Button onClick={handleCreate} disabled={isPending}>
      {isPending ? 'Creating...' : 'Create Product'}
    </Button>
  );
}
```

## 4. How to Create a New API Module

Follow these steps to add a new module for a backend resource (e.g., "Product").

### Step 1: Create the Module File

Create a new file in `/apis`, named after the resource: `apis/product.ts`.

### Step 2: Define Types

At the top of the new file, define the TypeScript interfaces for your resource's data structures.

```ts
// in /apis/product.ts

// Type for the data returned from the API
export interface ProductType {
  id: string;
  name: string;
  price: number;
  createdAt: string;
}

// Type for the form data used to create/update a product
export interface ProductFormType {
  name: string;
  price: number;
}
```

### Step 3: Write the Raw API Functions

Create `async` functions that perform the `axios` calls. These functions should be simple and only concern themselves with the HTTP request.

```ts
// in /apis/product.ts
import axios from 'axios';

// This function will be used by the useQuery hook
export async function getProductsFn(): Promise<ProductType[]> {
  const response = await axios.get('/api/products');
  return response.data;
}

// This function will be used by the useMutation hook
export async function createProductFn(data: ProductFormType): Promise<any> {
  const response = await axios.post('/api/products', data);
  return response.data;
}
```

### Step 4: Build the Hooks Object

Create and export a single object that wraps your raw API functions in TanStack Query hooks. This is where you define query keys and handle side effects like cache invalidation and toast notifications.

```ts
// in /apis/product.ts
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import queryClient from '@/lib/queryClient';
import { toast } from 'sonner';

const Product = {
  getAll: {
    useQuery: (options?: UseQueryOptions<ProductType[]>) =>
      useQuery({
        queryKey: ['products'], // Unique key for this query
        queryFn: getProductsFn,
        ...options,
      }),
  },
  create: {
    useMutation: (options?: UseMutationOptions<any, any, ProductFormType>) =>
      useMutation({
        mutationFn: createProductFn,
        ...options,
        onSuccess: (data) => {
          toast.success('Product created successfully!');
          // When a new product is created, invalidate the 'products' query
          // to trigger a refetch and update the UI automatically.
          queryClient.invalidateQueries({ queryKey: ['products'] });
        },
        onError: (error) => {
          toast.error('Failed to create product.');
        }
      }),
  },
};

export default Product;
```

### Step 5: Integrate into `apis/index.ts`

Finally, import your new module in `apis/index.ts` and add it to the exported `api` object.

```ts
// in /apis/index.ts

// 1. Import your new module
import Product from "./product";

// ... other imports
import Auth from "./auth/sme";
import Blog from "./blog";

const api = {
  // 2. Add your module to the object
  Product,
  
  // ... other modules
  Auth,
  Job,
};

export default api;
```

Your new module is now complete and can be used anywhere in the app via `api.Product.getAll.useQuery()` or `api.Product.create.useMutation()`.