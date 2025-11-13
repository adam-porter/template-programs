import React, { useState } from 'react'
import Sidebar from './Sidebar'
import ProgramListItem from './ProgramListItem'

/**
 * ProgramsPage Component - Main programs landing page
 * Displays programs filtered by status (published, draft, archived)
 */
const ProgramsPage = () => {
  // Mock programs data
  const mockPrograms = [
    {
      id: 'prog-001',
      title: 'August Camp',
      type: 'Camp',
      startDate: 'Aug 12, 2025',
      endDate: 'Aug 13, 2025',
      registrants: 602,
      collected: '$80,217.32',
      registrationStatus: 'Closed',
      status: 'published'
    },
    {
      id: 'prog-002',
      title: 'July Camp',
      type: 'Camp',
      startDate: 'Jul 15, 2025',
      endDate: 'Jul 16, 2025',
      registrants: 521,
      collected: '$52,109.11',
      registrationStatus: 'Closed',
      status: 'published'
    },
    {
      id: 'prog-003',
      title: 'June Camp',
      type: 'Camp',
      startDate: 'Jun 10, 2025',
      endDate: 'Jun 12, 2025',
      registrants: 450,
      collected: '$45,500.00',
      registrationStatus: 'Open',
      status: 'published'
    },
    {
      id: 'prog-004',
      title: 'Fall Tournament 2025',
      type: 'Tournament',
      startDate: 'Sep 1, 2025',
      endDate: 'Sep 5, 2025',
      registrants: 0,
      collected: '$0.00',
      registrationStatus: 'Draft',
      status: 'draft'
    },
    {
      id: 'prog-005',
      title: 'Winter 2024 Season',
      type: 'Season',
      startDate: 'Dec 1, 2024',
      endDate: 'Feb 28, 2025',
      registrants: 320,
      collected: '$32,000.00',
      registrationStatus: 'Closed',
      status: 'archived'
    }
  ]

  const [activeFilter, setActiveFilter] = useState('published')

  // Filter programs based on active filter
  const filteredPrograms = mockPrograms.filter(
    program => program.status === activeFilter
  )

  // Handle program click (navigate to program detail)
  const handleProgramClick = (program) => {
    console.log('Program clicked:', program)
    // TODO: Implement navigation to program detail page
    // Example: navigate(`/programs/${program.id}`)
  }

  // Get section title based on active filter
  const getSectionTitle = () => {
    const titles = {
      published: 'Published',
      draft: 'Draft',
      archived: 'Archived'
    }
    return titles[activeFilter] || 'Programs'
  }

  return (
    <>
      <style>
        {`
          .programs-page {
            display: flex;
            min-height: 100vh;
            background-color: #ffffff;
          }

          .programs-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            background-color: #ffffff;
          }

          .programs-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--u-space-two, 32px) var(--u-space-three, 48px);
            border-bottom: 1px solid var(--u-color-line-subtle, #c4c6c8);
          }

          .programs-title {
            font-family: var(--u-font-body);
            font-weight: var(--u-font-weight-bold, 700);
            font-size: var(--u-font-size-xlarge, 20px);
            color: var(--u-color-base-foreground-contrast, #071c31);
            margin: 0;
          }

          .programs-actions {
            display: flex;
            gap: var(--u-space-one, 16px);
          }

          .btn {
            font-family: var(--u-font-body);
            font-weight: var(--u-font-weight-bold, 700);
            font-size: var(--u-font-size-default, 16px);
            padding: var(--u-space-three-quarter, 12px) var(--u-space-one-and-half, 24px);
            border: none;
            border-radius: var(--u-border-radius-small, 2px);
            cursor: pointer;
            transition: background-color 0.2s ease;
          }

          .btn-primary {
            background-color: var(--u-color-emphasis-background-contrast, #0273e3);
            color: #ffffff;
          }

          .btn-primary:hover {
            background-color: #0259b8;
          }

          .btn-secondary {
            background-color: #7a8191;
            color: #ffffff;
          }

          .btn-secondary:hover {
            background-color: #626972;
          }

          .programs-list-container {
            flex: 1;
            overflow-y: auto;
          }

          .programs-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: var(--u-space-four, 64px) var(--u-space-three, 48px);
            text-align: center;
            color: var(--u-color-base-foreground, #36485c);
          }

          .empty-state-title {
            font-family: var(--u-font-body);
            font-weight: var(--u-font-weight-bold, 700);
            font-size: var(--u-font-size-large, 20px);
            margin: 0 0 var(--u-space-half, 8px) 0;
            color: var(--u-color-base-foreground-contrast, #071c31);
          }

          .empty-state-description {
            font-family: var(--u-font-body);
            font-weight: var(--u-font-weight-medium, 500);
            font-size: var(--u-font-size-default, 16px);
            margin: 0;
            color: var(--u-color-base-foreground, #36485c);
          }
        `}
      </style>

      <div className="programs-page">
        {/* Sidebar */}
        <Sidebar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Main Content */}
        <div className="programs-content">
          {/* Header */}
          <header className="programs-header">
            <h1 className="programs-title">{getSectionTitle()}</h1>
            <div className="programs-actions">
              <button className="btn btn-primary">
                Add Program
              </button>
              <button className="btn btn-secondary">
                Manage
              </button>
            </div>
          </header>

          {/* Programs List */}
          <div className="programs-list-container">
            {filteredPrograms.length > 0 ? (
              <ul className="programs-list">
                {filteredPrograms.map(program => (
                  <li key={program.id}>
                    <ProgramListItem
                      program={program}
                      onProgramClick={handleProgramClick}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="empty-state">
                <h3 className="empty-state-title">No {getSectionTitle().toLowerCase()} programs</h3>
                <p className="empty-state-description">
                  There are no {getSectionTitle().toLowerCase()} programs at this time.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProgramsPage
