import React from 'react'
import BuggyComponent from './BuggyComponent'
import ErrorBoundary from './ErrorBoundary'

function ParentErrorBoundary() {
  return (
    <div>
        <h1>Error Boundary Example</h1>
    <ErrorBoundary>
        <BuggyComponent />
    </ErrorBoundary>
        <div>
            <h3>Normal Component</h3>
            <p>This Component works just fine.</p>
        </div>

    </div>
  )
}

export default ParentErrorBoundary