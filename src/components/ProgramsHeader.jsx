import React from 'react'

/**
 * ProgramsHeader Component - Reusable header for programs page sections
 * Displays title on left with action buttons on right
 */
const ProgramsHeader = ({ title, buttons = [] }) => {
  return (
    <>
      <style>
        {`
          .programs-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--u-space-one-and-half, 32px) var(--u-space-three, 48px);
            border-bottom: 1px solid var(--u-color-line-subtle, #c4c6c8);
          }

          .programs-header-title {
            font-family: var(--u-font-body);
            font-weight: var(--u-font-weight-bold, 700);
            font-size: var(--u-font-size-title-xxlarge, 32px);
            color: var(--u-color-base-foreground-contrast, #071c31);
            margin: 0;
            line-height: 1.2;
          }

          .programs-header-actions {
            display: flex;
            gap: var(--u-space-one, 16px);
          }

          .programs-header-btn {
            font-family: var(--u-font-body);
            font-weight: var(--u-font-weight-bold, 700);
            font-size: var(--u-font-size-default, 16px);
            padding: var(--u-space-three-quarter, 12px) var(--u-space-one-and-half, 24px);
            border: none;
            border-radius: var(--u-border-radius-small, 2px);
            cursor: pointer;
            transition: background-color 0.2s ease;
          }

          .programs-header-btn.primary {
            background-color: var(--u-color-emphasis-background-contrast, #0273e3);
            color: #ffffff;
          }

          .programs-header-btn.primary:hover {
            background-color: #0259b8;
          }

          .programs-header-btn.secondary {
            background-color: #7a8191;
            color: #ffffff;
          }

          .programs-header-btn.secondary:hover {
            background-color: #626972;
          }
        `}
      </style>

      <header className="programs-header">
        <h1 className="programs-header-title">{title}</h1>
        {buttons.length > 0 && (
          <div className="programs-header-actions">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`programs-header-btn ${button.variant || 'primary'}`}
                onClick={button.onClick}
              >
                {button.label}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  )
}

export default ProgramsHeader
