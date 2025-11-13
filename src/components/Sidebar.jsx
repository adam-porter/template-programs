import React from 'react'

/**
 * Sidebar Component - Filter navigation for program status
 * Displays Published, Draft, and Archived filter options
 */
const Sidebar = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'published', label: 'Published' },
    { id: 'draft', label: 'Draft' },
    { id: 'archived', label: 'Archived' }
  ]

  return (
    <>
      <style>
        {`
          .sidebar {
            width: 262px;
            background-color: #1a1f28;
            padding: var(--u-space-two, 32px) 0;
            display: flex;
            flex-direction: column;
            gap: var(--u-space-two, 32px);
            height: 100vh;
            overflow-y: auto;
          }

          .sidebar-section {
            display: flex;
            flex-direction: column;
            gap: 0;
          }

          .sidebar-heading {
            font-family: var(--u-font-body);
            font-weight: var(--u-font-weight-bold, 700);
            font-size: var(--u-font-size-default, 16px);
            color: #ffffff;
            padding: 0 var(--u-space-two, 32px);
            margin: 0 0 var(--u-space-one-and-half, 24px) 0;
          }

          .sidebar-filter-button {
            padding: var(--u-space-three-quarter, 12px) var(--u-space-two, 32px);
            background: transparent;
            border: none;
            border-left: 3px solid transparent;
            cursor: pointer;
            font-family: var(--u-font-body);
            font-weight: var(--u-font-weight-medium, 500);
            font-size: var(--u-font-size-default, 16px);
            color: #a0a6ae;
            text-align: left;
            transition: all 0.2s ease;
          }

          .sidebar-filter-button:hover {
            color: #d0d6de;
          }

          .sidebar-filter-button.active {
            border-left-color: #0273e3;
            color: #ffffff;
            background-color: rgba(2, 115, 227, 0.1);
          }
        `}
      </style>

      <aside className="sidebar">
        <div className="sidebar-section">
          <h3 className="sidebar-heading">Programs</h3>
          <div>
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`sidebar-filter-button ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => onFilterChange(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
