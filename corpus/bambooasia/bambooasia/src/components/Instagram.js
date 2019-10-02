import React, { Component } from 'react'
import axios from 'axios';
import Header from "./Header";
import { CSSGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';
import styled from 'styled-components';

const Grid = makeResponsive(measureItems(CSSGrid), {
    maxWidth: 1920,
    minPadding: 100
});

class Instagram extends Component {
    state = {
        images: [],
        token: this.props.token || '1470842930.1677ed0.c1cfe9106966460a9ba2435f7d3a3dec',
    }

    componentDidMount() {
        axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.state.token}`).then(({ data }) => {
            this.setState({ images: data.data })
        }).catch((err) => (
            console.log(err)
        ));
    }
    render() {
        if (this.state.images.length) {
            return (
                <InstagramContainer>
                    <HeaderContainer>
                        <Header>Gallery Photo</Header>
                    </HeaderContainer>
                    <Grid
                        component="ul"
                        columns={this.state.gridColumns}
                        columnWidth={320}
                        gutterWidth={5}
                        layout={layout.pinterest}
                        gutterHeight={5}
                        duration={800}
                        easing="ease-out"
                        style={{ margin: '0 auto' }}
                    >
                        {
                            this.state.images.map((image, key) => {
                                return (
                                    <li key={key} itemHeight={image.images.low_resolution.height}>
                                        <img src={image.images.low_resolution.url} />
                                    </li>
                                )
                            })
                        }
                    </Grid>
                </InstagramContainer>

            )
        } else {
            return null;
        }
    }
}

const InstagramContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const HeaderContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;

export default Instagram
