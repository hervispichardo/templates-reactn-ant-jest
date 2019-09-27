import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Layout } from 'antd';

import Home from '../pages/Home'
import Project from '../pages/Project'

import Navigation from '../components/Navigation'

const { Header, Content, Footer } = Layout;

function App({ children }) {
  return (
    <Router basename={'/'}>
      <Layout className="layout">
        <Header>
          <Navigation />
        </Header>
        <Content style={{ padding: '30px 50px' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/project/:name" component={Project} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Hervis Pichardo</Footer>
      </Layout>
    </Router>
  );
}

export default App;
