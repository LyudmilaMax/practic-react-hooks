import { useState, useEffect } from 'react';
import { Input, Button } from './Calc.styled';

const Calc = () => {
  const [var1, setVar1] = useState(0);
  const [var2, setVar2] = useState(0);
  const [result, setResult] = useState(0);
  const [btnActive, setBtnActive] = useState('plus');

  useEffect(() => {
    setResult(var1 + var2);
  }, [var1, var2]);

  function test() {
    return result;
  }
  var b = test();
  console.log(b);

  //   var b = (()=> {
  //     return result;
  //   })();
  //   console.log(b);

  var setVar2_ = e => {
    setVar2(Number(e.target.value));
  };

  function test2() {
    return setVar2_;
  }

  const btnClickAdd = e => {
    setBtnActive('plus');
  };

  const btnClickMulty = e => {
    setBtnActive('multy');
  };

  return (
    <>
      <label>
        <Input
          type="text"
          value={var1}
          onChange={e => {
            setVar1(Number(e.target.value));
          }}
        />
      </label>
      <Button
        isActive={btnActive === 'plus'}
        type="button"
        onClick={btnClickAdd}
      >
        +
      </Button>
      <Button
        isActive={btnActive === 'multy'}
        type="button"
        onClick={btnClickMulty}
      >
        *
      </Button>

      <label>
        <Input type="text" value={var2} onChange={test2()} />
        {/* <Input type="text" value={var2} onChange={e => setVar2_(e)} /> */}
      </label>
      <label>
        {/* <Input type="text" disabled={true} value={test()} /> */}
        <Input type="text" disabled={true} value={result} />
      </label>
    </>
  );
};

export default Calc;
