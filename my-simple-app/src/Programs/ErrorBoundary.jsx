import React, { Component } from 'react'


export default class ErrorBoundary extends Component {

    constructor(props){
        super(props)
        this.state={
            hasError:false,
            error:null,
            errorInfo:null
        }
    }

    //catch error in child comp and rerender with fallback ui

    static getDerivedStateFromError(error){
        return {hasError:true}  //update state to show fallback ui
    }

    componentDidCatch(error, errorInfo){
        console.error("Error caught in errorboundary : ", error, errorInfo)

        this.setState({
            error:error,
            errorInfo:errorInfo
        })
    }

  render() {
   if(this.state.hasError){

    //render the fallback ui

    return (
        <div>
            <h2>Error Boundary</h2>
            <h2>Somethig went wrong</h2>
            <details style={{whiteSpace:'pre-wrap'}}>
                {this.state.error && this.state.error.toString()}
                <br/>
                {this.state.errorInfo && this.state.errorInfo.componentStack}
            </details>
        </div>

      )
   }

   //when no error , render children as usual
   return this.props.children;
  }
}
