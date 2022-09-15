import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import Navbar from '../common/header/Navbar';
import Sidebar from '../common/header/Sidebar';
import { Link, useParams } from 'react-router-dom';
import { API_URL, ABOUTUSSINGLE, UPDATEABOUT } from "../common/api/constant";


class Updateckeditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '<p>Initial data.</p>',
            id: localStorage.getItem('aboutid')
        };
    }
    handleEditorChange() {
        return (event, editor) => {
            this.setState({ content: editor.getData() });

        }
    }
    componentDidMount() {

        fetch(`${API_URL}/${ABOUTUSSINGLE}/` + 3)
            .then((res) => res.json())
            .then((data) => {

                this.setState({ content: data.response.about_page });

            })
            .catch((err) => {
                console.log(err);
            });
    }
    updatedata() {
        axios.put(`${API_URL}/${UPDATEABOUT}/` + this.state.id, this.state, {
            "headers": {
                "content-type": "application/json",
            },
        })
            .then(res => {

            });
    }

    render() {
        return (
            <div className="sb-nav-fixed">
                <Navbar />
                <div id="layoutSidenav">
                    <Sidebar />
                    <div id="layoutSidenav_content">

                        <div className="pt-4 pb-5">

                            <main style={{ marginTop: '7%' }}>

                                <div className="containar-fluid px-5 ">

                                    <div className="report_form">

                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={this.state.content || ''}
                                            onChange={this.handleEditorChange()}
                                        />
                                        <button type="button" className="btn btn-primary" style={{ margin: '15px' }} onClick={() => this.updatedata()}>Submit</button>

                                    </div>
                                </div>
                            </main>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Updateckeditor;
