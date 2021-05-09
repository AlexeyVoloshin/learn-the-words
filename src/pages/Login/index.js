import React, {Component} from 'react';
import {Layout, Form, Input, Button} from 'antd';

import s from './Login.module.scss';
import {fire} from '../../services/firebase';

const {Content} = Layout;

class LoginPage extends Component {
    
    onFinish = ({email, password}) => {
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log('####: res', res);
            });
    };

    onFinishFailed = (errorMsg) => {
        console.log('####: errorMsg', errorMsg);
    };

    renderForm = () => {
        
        const layout = {
            labelCol: {
              span: 6,
            },
            wrapperCol: {
              span: 18,
            },
          };

        const  tailLayout = {
            wrapperCol: {
              offset: 6,
              span: 18,
            },
          };
     
        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                >
                <Form.Item
                    label="Username"
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    };
    
    render() {
        return (
            <Layout>
                <Content>
                    <div className={s.content}>
                        <div className={s.content__formWrap}>
                            {this.renderForm()}
                        </div>
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default LoginPage;