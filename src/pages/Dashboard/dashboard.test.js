import { configureStore } from "@reduxjs/toolkit"
import { cleanup, render, screen } from "@testing-library/react"
import { createElement } from "react"
import { afterEach, expect, test, vi } from "vitest"
import { Provider } from "react-redux"
import DashboardPage from "./Dashboard.page"
import dashboardReducer from "./dashboard.slice"

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

test("renders the dashboard and fetched user data", async () => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
    json: async () => [{ id: 1, username: "ada" }],
  }))

  const store = configureStore({ reducer: { dashboard: dashboardReducer } })
  render(
    createElement(Provider, { store }, createElement(DashboardPage)),
  )

  expect(screen.getByRole("heading", { name: "Dashboard" })).toBeTruthy()
  expect(await screen.findByText(/ada/)).toBeTruthy()
})
