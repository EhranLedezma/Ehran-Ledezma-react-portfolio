import React, { Component } from 'react';

export class order extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="heading">
                        <h3>CHOOSE: </h3>
                    </div>
                    <div className="columns">
                        <div className="left">
                            <h2>OIL</h2>
                            <h2>WASH</h2>
                            <h2>PAPER</h2>
                        </div>
                        <div className="center">
                        <h2>|</h2>
                        <h2>|</h2>
                        <h2>|</h2>
                        </div>
                        <div className="right">
                            <h2>12x12</h2>
                            <h2>16x20</h2>
                            <h2>18x18</h2>
                        </div>
                    </div>
                </div>
            <div className="link">
                <a href="https://docs.google.com/spreadsheets/d/1oiYEMP5gG2f9WtMhRpAvq6Ne5aQ0XaxoleOM8eA6WeU/edit#gid=0#">ORDER HERE</a>
            </div>
        </div>
        )
    }
}

export default order;
