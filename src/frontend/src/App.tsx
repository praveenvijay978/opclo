import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));
const ShopListPage = lazy(() => import("./pages/ShopListPage"));
const ShopDetailPage = lazy(() => import("./pages/ShopDetailPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const MapPage = lazy(() => import("./pages/MapPage"));
const OwnerDashboard = lazy(() => import("./pages/OwnerDashboard"));
const OwnerRegister = lazy(() => import("./pages/OwnerRegister"));

function PageLoader() {
  return (
    <div className="p-4 space-y-3">
      <Skeleton className="h-8 w-2/3 rounded-xl" />
      <Skeleton className="h-32 w-full rounded-2xl" />
      <Skeleton className="h-32 w-full rounded-2xl" />
      <Skeleton className="h-32 w-full rounded-2xl" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader />
      <main className="flex-1 max-w-[480px] mx-auto w-full pb-24">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <BottomNav />
      <Toaster richColors position="top-center" />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: CategoriesPage,
});

const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/category/$categoryId",
  component: ShopListPage,
});

const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop/$shopId",
  component: ShopDetailPage,
});

const favoritesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/favorites",
  component: FavoritesPage,
});

const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search",
  component: SearchPage,
});

const mapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/map",
  component: MapPage,
});

const ownerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/owner",
  component: OwnerDashboard,
});

const ownerRegisterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/owner/register",
  component: OwnerRegister,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  categoryRoute,
  shopRoute,
  favoritesRoute,
  searchRoute,
  mapRoute,
  ownerRoute,
  ownerRegisterRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
