import react from 'react'

const Domquery = () => {
  return (
    <div>
      <div>test1</div>
      <div>test2</div>
      <button aria-pressed>按钮</button>
      <label>
        testLabel
        <input />
      </label>
      <input placeholder="a query by placeholder" />
      <input defaultValue="a query by value" readOnly />
      <img alt="a query by alt" />
      <span title="a query by title" />
      <div data-testid="a not so good query"></div>
    </div>
  )
}

export default Domquery
