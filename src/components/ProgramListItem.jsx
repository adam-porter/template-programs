import React from 'react'

/**
 * ProgramListItem Component - Individual program list item
 * Displays program details with click-through to program page
 */
const ProgramListItem = ({ program, onProgramClick }) => {
  return (
    <>
      <style>
        {`
          .program-list-item {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: var(--u-space-one-and-half, 24px) var(--u-space-three, 48px);
            border-bottom: 1px solid var(--u-color-line-subtle, #c4c6c8);
            background-color: transparent;
            transition: background-color 0.2s ease;
          }

          .program-list-item:hover {
            background-color: var(--u-color-background-container, #fefefe);
          }

          .program-list-item:last-child {
            border-bottom: none;
          }

          .program-info {
            display: flex;
            flex-direction: column;
            gap: var(--u-space-quarter, 4px);
            flex: 1;
          }

          .program-title {
            font-family: var(--u-font-body);
            font-weight: var(--u-font-weight-bold, 700);
            font-size: var(--u-font-size-default, 16px);
            color: var(--u-color-emphasis-background-contrast, #0273e3);
            cursor: pointer;
            margin: 0;
            padding: 0;
            background: none;
            border: none;
            text-decoration: none;
            text-align: left;
          }

          .program-title:hover {
            text-decoration: underline;
          }

          .program-meta {
            font-family: var(--u-font-body);
            font-weight: var(--u-font-weight-medium, 500);
            font-size: var(--u-font-size-small, 14px);
            color: var(--u-color-base-foreground, #36485c);
            margin: 0;
          }

          .program-stats {
            display: flex;
            align-items: center;
            gap: var(--u-space-one-and-half, 24px);
            flex: 1;
            padding: 0 var(--u-space-three, 48px);
          }

          .program-stat {
            font-family: var(--u-font-body);
            font-weight: var(--u-font-weight-medium, 500);
            font-size: var(--u-font-size-small, 14px);
            color: var(--u-color-base-foreground-contrast, #071c31);
            margin: 0;
            white-space: nowrap;
          }

          .program-stat-label {
            color: var(--u-color-base-foreground, #36485c);
          }

          .stat-separator {
            color: var(--u-color-base-foreground, #36485c);
          }

          .registration-status {
            font-family: var(--u-font-body);
            font-weight: var(--u-font-weight-bold, 700);
            font-size: var(--u-font-size-small, 14px);
            color: var(--u-color-base-foreground-contrast, #071c31);
            padding: var(--u-space-quarter, 4px) var(--u-space-three-quarter, 12px);
            background-color: var(--u-color-background-container, #fefefe);
            border: 1px solid var(--u-color-line-subtle, #c4c6c8);
            border-radius: var(--u-border-radius-small, 2px);
            white-space: nowrap;
          }

          .program-menu {
            display: flex;
            align-items: center;
            gap: var(--u-space-half, 8px);
            padding-left: var(--u-space-two, 32px);
          }

          .program-menu-button {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 20px;
            color: var(--u-color-base-foreground, #36485c);
            padding: var(--u-space-quarter, 4px);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .program-menu-button:hover {
            color: var(--u-color-base-foreground-contrast, #071c31);
          }
        `}
      </style>

      <div className="program-list-item">
        {/* Program info section */}
        <div className="program-info">
          <button
            className="program-title"
            onClick={() => onProgramClick(program)}
          >
            {program.title}
          </button>
          <p className="program-meta">
            {program.type} · {program.startDate} – {program.endDate}
          </p>
        </div>

        {/* Program stats section */}
        <div className="program-stats">
          <div className="program-stat">
            <span className="program-stat-label">Registrants: </span>
            {program.registrants}
          </div>
          <div className="program-stat">
            <span className="program-stat-label">Collected: </span>
            {program.collected}
          </div>
          <div className="program-stat">
            <span className="program-stat-label">Registration: </span>
            <span className="registration-status">{program.registrationStatus}</span>
          </div>
        </div>

        {/* Menu section */}
        <div className="program-menu">
          <button className="program-menu-button" title="More options">
            ⋮
          </button>
        </div>
      </div>
    </>
  )
}

export default ProgramListItem
