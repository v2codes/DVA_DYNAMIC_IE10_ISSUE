import React from 'react';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Info from '@/lib/register/info';

const CodePreview = ({ children }) => (
  <pre
    style={{
      background: '#f2f4f5',
      padding: '12px 20px',
      margin: '12px 0',
    }}
  >
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default () => (
  <PageHeaderWrapper>
    <Card>
      <Alert
        message="=> Test dva/dynamic"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      <Typography.Text strong>
        <a target="_blank" rel="noopener noreferrer" href="https://pro.ant.design/docs/block">
          基于 block 开发，快速构建标准页面
        </a>
      </Typography.Text>
      <CodePreview>
        <Info />
      </CodePreview>
    </Card>
    {/* <p
     style={{
       textAlign: 'center',
       marginTop: 24,
     }}
    >
     Want to add more pages? Please refer to{' '}
     <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
       use block
     </a>
     。
    </p> */}
  </PageHeaderWrapper>
);
