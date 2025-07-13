---
type: 'agent_requested'
description: 'Use this rule when you are implementing data fetching feature or using react-query'
---

### React Query Guidelines

1.  **Hook Location**:
    - All custom React Query hooks (e.g., `useQuery`, `useMutation`) should be placed within the `src/components/samples/react-query/hooks/` directory or a similar `hooks/` subdirectory within a feature module.

2.  **Type Location**:
    - All TypeScript interfaces and types related to React Query hooks and their data structures should be defined in `src/components/samples/react-query/types/index.ts` or a dedicated `types/` subdirectory within the relevant feature module.
    - Follow the naming conventions:
      - Interfaces: `I` prefix + PascalCase (e.g., [`IMarketplaceProduct`](src/components/samples/react-query/types/index.ts)).
      - Enums: `E` prefix + PascalCase (e.g., [`EProductStatus`](src/components/samples/react-query/types/index.ts)).
      - Enum values: `UPPER_CASE` for constants.

3.  **Hook Naming Conventions**:
    - React Query hooks should follow the `use[FeatureName][DataDescription]` PascalCase convention (e.g., [`useMarketplaceTopProducts`](src/components/samples/react-query/hooks/useMarketplaceTopProducts.tsx)).
    - Files should be named in `kebab-case` matching the hook name (e.g., `use-marketplace-top-products.tsx`).

4.  **Query Keys**:
    - Define query keys in a centralized and structured manner, preferably using a constant object or an enum, to ensure consistency and prevent typos.
    - Example:
      ```typescript
      // src/core/constants/query-keys.ts
      export const QUERY_KEYS = {
      	MARKETPLACE: {
      		TOP_PRODUCTS: ['marketplace', 'topProducts'],
      		PRODUCT_DETAILS: (id: string) => [
      			'marketplace',
      			'productDetails',
      			id,
      		],
      	},
      	// ... other feature keys
      } as const;
      ```
    - Use these keys directly in your `useQuery` and `useMutation` calls.

5.  **Data Fetching Logic**:
    - Separate the actual data fetching logic (e.g., `axios` calls, `fetch` API) from the React Query hooks.
    - Place these functions in `src/core/api/` or a dedicated `services/` directory to promote reusability, testability, and separation of concerns.
    - The React Query hooks should then call these data fetching functions.
    - Example:

      ```typescript
      // src/core/api/marketplace.ts
      import { IMarketplaceProduct } from '@/components/samples/react-query/types';

      export const getTopMarketplaceProducts = async (): Promise<IMarketplaceProduct[]> => {
        const response = await fetch('/api/marketplace/top-products');
        if (!response.ok) {
          throw new Error('Failed to fetch top products');
        }
        return response.json();
      };

      // src/components/samples/react-query/hooks/useMarketplaceTopProducts.tsx
      import { useQuery } from '@tanstack/react-query';
      import { QUERY_KEYS } from '@/core/constants/query-keys';
      import { getTopMarketplaceProducts } from '@/core/api/marketplace';

      export const useMarketplaceTopProducts = () => {
        return useQuery({
          queryKey: QUERY_KEYS.MARKETPLACE.TOP_PRODUCTS,
          queryFn: getTopMarketplaceProducts,
        });
      };
      ```
