import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { AppBarComponent } from "./AppBar/AppBar"
import styled from 'styled-components';
import Container from '@mui/material/Container';



export const Layout = () => {
    return (
        <LayoutWrapper>
            <AppBarComponent />
            {/* додати саспенс, аутлети і решту */}
            <Container maxWidth="sm">

            <Suspense fallback={null}>
            <Outlet />
                </Suspense>
                </Container >
        </LayoutWrapper>
    )
}

const LayoutWrapper = styled.div`
padding: 0 20;
maxWidth:740;
`