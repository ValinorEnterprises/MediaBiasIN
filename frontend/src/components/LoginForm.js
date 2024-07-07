import { Form,Button,Grid,GridColumn,GridRow, FormField, Input, ButtonGroup, FormButton } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const UserEntry = () => {
    return (
        <Grid columns={2} textAlign="justified" verticalAlign="middle">
            <GridRow class="ui text menu" textAlign="justified" verticalAlign="middle" centered>
                <GridColumn width={10} stretched color='white'>
                </GridColumn>
                <GridColumn width={6} centered verticalAlign="middle" color="olive">
                    <Form size="large">
                        <FormField style={{marginBottom:'0'}} width={10}>
                            <label><b>Email</b></label>
                            <Input placeholder="you@example.com" />
                        </FormField>
                        <FormField style={{marginBottom:'0'}} width={10}>
                            <label>Password</label>
                            <Input placeholder="At least 4 characters" />
                        </FormField>
                    </Form><br></br>
                        <Button size="large" color="vk" type="submit">Login</Button>
                        <Button size="large" color="google plus" type="submit">Sign Up</Button>
                </GridColumn>
            </GridRow>
        </Grid>
    );
}

export default UserEntry;