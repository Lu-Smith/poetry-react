import React from 'react';

interface Props {
    mode: boolean,
}

const MainPage: React.FC<Props> = ({mode}) => {
  return (
    <div className={mode ? "light" : ""}>MainPage</div>
  )
}

export default MainPage