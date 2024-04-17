

import styled from 'styled-components'

const Typography = styled.span`
  ${(props)=>
    props.variant === "h1" && 
    `
    font-size:48px;
    font-weight:700;
    `
  }
  ${(props)=>
    props.variant === "h2" && 
    `
    font-size:32px;
    font-weight:700;
    `
  }
  ${(props)=>
    props.variant === "h3" && 
    `
    font-size:28px;
    font-weight:600;
    `
  }
  ${(props)=>
    props.variant === "h4" && 
    `
    font-size:24px;
    font-weight:600;
    `
  }
  ${(props)=>
    props.variant === "h5" && 
    `
    font-size:18px;
    font-weight:600;
    `
  }
  ${(props)=>
    props.variant === "h6" && 
    `
    font-size:16px;
    font-weight:500;
    `
  }
`
export default Typography;