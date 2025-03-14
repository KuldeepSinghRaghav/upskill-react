import React from 'react';

const PureFunctionalComponent = React.memo(function MyComponent(props) {
  // This component will only re-render if props change (shallow comparison)
  console.log('MyPureFunctionalComponent rendered');
  return (
    <div>
      {props.value}
    </div>
  );
});

export default PureFunctionalComponent;