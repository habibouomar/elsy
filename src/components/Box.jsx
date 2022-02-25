import React from "react";

export class Box extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{fontSize: "100px", color: this.props.color}}>
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>

                { this.props.icon !== "local_drink" ? <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onInput={this.props.onChange} ></input>:null }

            </div>
        );
    }
}

