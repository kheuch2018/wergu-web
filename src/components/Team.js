import React from 'react';
import { Grid, Container, Responsive } from 'semantic-ui-react';
import cheikh from "../img/cheikh.png"
import aita from "../img/aita.png"
import docko from "../img/docko.png"
import Member from "./Member"

const Team = () => {
    return (

        <>
        <Responsive maxWidth={599.9999}>
            <Grid columns={1}>
                <Grid.Row>
                        <Member image={cheikh} name="Cheikh Seck" status="CEO" />
                        <Member image={aita} name={"Aïta Ndir Dia"} status="CMO"/>
                        <Member image={docko} name="Docko Sow" status="CTO" />
                </Grid.Row>
            </Grid>
        </Responsive>
        <Responsive minWidth={600}>
        <Container>
            <Grid columns={3}>
                <Grid.Row>
                        <Member image={cheikh} name="Cheikh Seck" status="CEO" />
                        <Member image={aita} name={"Aïta Ndir Dia"} status="CMO"/>
                        <Member image={docko} name="Docko Sow" status="CTO" />
                </Grid.Row>
            </Grid>
        </Container>
        </Responsive>
        </>
    );
};

export default Team;