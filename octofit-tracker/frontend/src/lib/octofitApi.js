const LOCAL_API_ORIGIN = 'http://127.0.0.1:8000'

export function getApiOrigin() {
  const codespaceName = (import.meta.env.VITE_CODESPACE_NAME ?? '').trim()

  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : LOCAL_API_ORIGIN
}

export function getApiUrl(component) {
  return `${getApiOrigin()}/api/${component}/`
}

export function normalizeCollectionResponse(payload) {
  if (Array.isArray(payload)) {
    return {
      items: payload,
      page: null,
      pageSize: null,
      total: payload.length,
    }
  }

  const items =
    Array.isArray(payload?.items)
      ? payload.items
      : Array.isArray(payload?.results)
        ? payload.results
        : Array.isArray(payload?.data)
          ? payload.data
          : []

  const total =
    typeof payload?.count === 'number'
      ? payload.count
      : typeof payload?.total === 'number'
        ? payload.total
        : typeof payload?.totalCount === 'number'
          ? payload.totalCount
          : items.length

  return {
    items,
    page: typeof payload?.page === 'number' ? payload.page : null,
    pageSize:
      typeof payload?.pageSize === 'number'
        ? payload.pageSize
        : typeof payload?.limit === 'number'
          ? payload.limit
          : null,
    total,
  }
}

export async function fetchCollection(component) {
  const response = await fetch(getApiUrl(component))

  if (!response.ok) {
    throw new Error(`Failed to load ${component}: ${response.status} ${response.statusText}`)
  }

  const payload = await response.json()

  return normalizeCollectionResponse(payload)
}
