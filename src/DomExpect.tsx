import React from 'react'
import { Form } from '@douyinfe/semi-ui'

const DomExpect = () => {
  return (
    <div>
      <div aria-label="empty_node"></div>
      <div role="note" style={{ display: 'none' }} aria-hidden>
        1234
      </div>
      <div role="note">1234</div>

      <div>
        <form aria-label="form">
          <input type="text" name="username" disabled aria-disabled defaultValue="zhenmin" />
          <input type="number" name="age" defaultValue={23} required aria-label="duration" />
          <input type="radio" name="sex" value="man" defaultChecked aria-checked />
          <input type="radio" name="sex" value="woman" />
        </form>
      </div>

      <div role="note2" className="test hidden" style={{ display: 'none' }} aria-hidden aria-label='testnode2'>
        1234
      </div>

      <Form initValues={{ username: 'zhenmin', age: 23, sex: 'man', hobby: 'code' }} aria-label="semi-form">
        <Form.Input field="username" disabled name="username" />
        <Form.InputNumber field="age" required name="age" />
        <Form.RadioGroup field="sex" name="sex">
          <Form.Radio value="man" />
          <Form.Radio value="woman" />
        </Form.RadioGroup>
        <Form.Select field="hobby" name="hobby">
          <Form.Select.Option value="code">code</Form.Select.Option>
          <Form.Select.Option value="read">read</Form.Select.Option>
        </Form.Select>
      </Form>
    </div>
  )
}

export default DomExpect
