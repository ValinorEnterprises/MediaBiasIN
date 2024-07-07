import { 
    Button, 
    Grid, GridColumn, GridRow, 
    Menu, Image, 
    DropdownMenu,
    DropdownItem,
    DropdownHeader,
    DropdownDivider,
    MenuMenu,
    Dropdown,
    Icon,
    Segment
} from "semantic-ui-react";
import applogo from "../resources/applogo.png";

const TopPane = () => {
    return (
        <div>
            <Grid columns={3} textAlign="center" verticalAlign="middle" centered padded>
                <GridRow class="ui text menu" stretched centered color="olive">
                    <GridColumn width={3} stretched>
                        <div>
                            <Image src = {applogo} className="App-logo" alt="logo" />
                        </div>    
                    </GridColumn>
                    <GridColumn width={11} stretched>
                        <div>
                            <h3>A Study of Screenwriting</h3>
                        </div>
                        <Menu attached='top'>
                            <Dropdown item icon='wrench' simple>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <Icon name='dropdown' />
                                        <span className='text'>New</span>
                                        <DropdownMenu>
                                            <DropdownItem>Document</DropdownItem>
                                            <DropdownItem>Image</DropdownItem>
                                        </DropdownMenu>
                                    </DropdownItem>
                                    <DropdownItem>Open</DropdownItem>
                                    <DropdownItem>Save...</DropdownItem>
                                    <DropdownItem>Edit Permissions</DropdownItem>
                                    <DropdownDivider />
                                    <DropdownHeader>Export</DropdownHeader>
                                    <DropdownItem>Share</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <MenuMenu position='right'>
                                <div className='ui right aligned category search item'>
                                <div className='ui transparent icon input'>
                                    <input
                                    className='prompt'
                                    type='text'
                                    placeholder='Search movies...'
                                    />
                                    <i className='search link icon' />
                                </div>
                                <div className='results' />
                                </div>
                            </MenuMenu>
                        </Menu>
                    </GridColumn>
                    <GridColumn width={2} stretched>
                    <div class="ui right dropdown item">
                            Sign Up
                            <i class="dropdown icon"></i>
                            <div class="menu">
                                <div class="item">Applications</div>
                                <div class="item">International Students</div>
                                <div class="item">Scholarships</div>
                            </div>
                        </div>
                    </GridColumn>
                </GridRow>
            </Grid>
            <div class="ui flowing basic admission popup">
                <div class="ui three column relaxed divided grid">
                    <div class="column">
                        <h4 class="ui header">Business</h4>
                        <div class="ui link list">
                            <a class="item">Design and Urban Ecologies</a>
                            <a class="item">Fashion Design</a>
                            <a class="item">Fine Art</a>
                            <a class="item">Strategic Design</a>
                        </div>
                    </div>
                    <div class="column">
                        <h4 class="ui header">Liberal Arts</h4>
                        <div class="ui link list">
                            <a class="item">Anthropology</a>
                            <a class="item">Economics</a>
                            <a class="item">Media Studies</a>
                            <a class="item">Philosophy</a>
                        </div>
                    </div>
                    <div class="column">
                        <h4 class="ui header">Social Sciences</h4>
                        <div class="ui link list">
                            <a class="item">Food Studies</a>
                            <a class="item">Journalism</a>
                            <a class="item">Non Profit Management</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TopPane;
