
import styled from 'styled-components'

const Stack = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
    ${(props) =>
        props.direction === 'row' && 'flex-direction:row;'
    }
    ${(props) =>
        props.spacing && `gap:${props.spacing}px;`
    }
`
export default Stack;