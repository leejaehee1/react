import React, { Component, ErrorInfo, HtmlHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, Container } from '@material-ui/core';
import { CoreLayoutProps } from 'react-admin';
import Header from './Header';

import { Notification, Error } from 'react-admin';


class Layout extends Component<LayoutProps, LayoutState>  {
    state: LayoutState = {
        hasError: false,
        errorMessage: undefined,
        errorInfo: undefined,
    };

    constructor(props: any) {
        super(props);
        /**
         * Reset the error state upon navigation
         *
         * @see https://stackoverflow.com/questions/48121750/browser-navigation-broken-by-use-of-react-error-boundaries
         */
        props.history.listen(() => {
            if (this.state.hasError) {
                this.setState({ hasError: false });
            }
        });
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            hasError: true,
            errorMessage: error,
            errorInfo,
        });
    }

    render() {
        const { theme, title, children } = this.props;
        const { hasError, errorMessage, errorInfo } = this.state;
        return (
            // @ts-ignore
            <ThemeProvider theme={createMuiTheme(theme)}>
                <CssBaseline />
                <Header />
                
                <Container>
                    
                    <main id="main-content">
                        {hasError ? (
                            <Error
                                error={errorMessage as Error}
                                errorInfo={errorInfo}
                                title={title as string}
                            />
                        ) : (
                            children
                        )}
                    </main>
                </Container>
                <Notification />
            </ThemeProvider>
        );
    }

    // // prop가 특정 JS 형식임을 선언할 수 있습니다
    // // https://ko.reactjs.org/docs/typechecking-with-proptypes.html
    // // 여러 종류중 하나의 종류가 될 수 있는 객체 (oneOfType)
    // static propTypes = {
    //     children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    //     title: PropTypes.node.isRequired,
    // };
}


export interface LayoutProps
    extends CoreLayoutProps,
        Omit<HtmlHTMLAttributes<HTMLDivElement>, 'title'>,
        RouteComponentProps {}

export interface LayoutState {
    hasError: boolean;
    errorMessage?: Error;
    errorInfo?: ErrorInfo;
}

export default withRouter(Layout);