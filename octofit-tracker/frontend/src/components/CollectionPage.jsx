import { useEffect, useState } from 'react'

import { fetchCollection } from '../lib/octofitApi'

function CollectionPage({
  component,
  title,
  description,
  columns,
  renderRow,
  emptyMessage,
}) {
  const [state, setState] = useState({
    error: null,
    items: [],
    loading: true,
    page: null,
    pageSize: null,
    total: 0,
  })

  useEffect(() => {
    let active = true

    async function loadCollection() {
      setState((currentState) => ({ ...currentState, loading: true, error: null }))

      try {
        const nextState = await fetchCollection(component)

        if (active) {
          setState({
            error: null,
            loading: false,
            ...nextState,
          })
        }
      } catch (error) {
        if (active) {
          setState((currentState) => ({
            ...currentState,
            error: error instanceof Error ? error.message : 'Unexpected API error',
            loading: false,
          }))
        }
      }
    }

    loadCollection()

    return () => {
      active = false
    }
  }, [component])

  const { error, items, loading, page, pageSize, total } = state
  const hasItems = items.length > 0

  return (
    <section className="octofit-view card border-0 shadow-sm">
      <div className="card-body p-4 p-lg-5">
        <div className="d-flex flex-column flex-lg-row gap-3 justify-content-between align-items-lg-end mb-4">
          <div>
            <p className="octofit-eyebrow mb-2">{component}</p>
            <h1 className="h2 fw-bold mb-2 text-white">{title}</h1>
            <p className="text-white-50 mb-0">{description}</p>
          </div>
          <div className="octofit-metrics text-white-50">
            <div>
              <strong className="text-white">{total}</strong> records
            </div>
            {typeof page === 'number' && (
              <div>
                Page <strong className="text-white">{page}</strong>
              </div>
            )}
            {typeof pageSize === 'number' && (
              <div>
                Page size <strong className="text-white">{pageSize}</strong>
              </div>
            )}
          </div>
        </div>

        {loading && <div className="alert alert-info mb-0">Loading {component}...</div>}

        {error && <div className="alert alert-danger mb-0">{error}</div>}

        {!loading && !error && !hasItems && <div className="alert alert-warning mb-0">{emptyMessage}</div>}

        {!loading && !error && hasItems && (
          <div className="table-responsive">
            <table className="table table-dark table-striped align-middle mb-0 octofit-table">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column.key} scope="col">
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{items.map((item, index) => renderRow(item, index))}</tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default CollectionPage
