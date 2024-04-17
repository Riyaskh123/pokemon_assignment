import styled from 'styled-components'

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Adjust the column size as per your need */
grid-gap: 20px; /* Adjust the gap between grid items */

@media (max-width: 768px) {
  grid-template-columns: 1fr; /* Make grid items full width on mobile */
}
`;

export default Grid;