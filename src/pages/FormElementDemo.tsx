import React, { FC, useState, ChangeEvent } from "react";

const Demo: FC = () => {
  // const [text, setText] = useState<string>("hello");

  // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
  //   setText(event.target.value);
  // }

  // function getHtml() {
  //   return {
  //     __html: text.replaceAll("\n", "<br />"),
  //   };
  // }

  // const [gender, setGender] = useState("male");
  // function handleChange(event: ChangeEvent<HTMLInputElement>) {
  //   setGender(event.target.value);
  // }

  // const [checked, setChecked] = useState(false);
  // function toggleChecked() {
  //   setChecked(!checked);
  // }

  // const [selectedCityList, setSelectedCityList] = useState<string[]>([]);
  // function handleCityChange(event: ChangeEvent<HTMLInputElement>) {
  //   const city = event.target.value;
  //   if (selectedCityList.includes(city)) {
  //     // 移除
  //     setSelectedCityList(
  //       selectedCityList.filter((c) => {
  //         if (c === city) return false;
  //         return true;
  //       })
  //     );
  //   } else {
  //     // 添加
  //     setSelectedCityList(
  //       selectedCityList.concat(city)
  //     );
  //   }
  // }

  // const [lang, setLang] = useState("JS");
  // function handleChange(event: ChangeEvent<HTMLSelectElement>) {
  //   setLang(event.target.value);
  // }

  return (
    <>
      {/* <input type="text" value={text} onChange={handleChange} /> */}

      {/* <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        value={text}
        onChange={handleChange}
      ></textarea>
      {text.replaceAll("\n", "<br />")}
      <p dangerouslySetInnerHTML={getHtml()}></p>
      <button onClick={() => console.log(text)}>打印</button>
      <button onClick={() => setText("设置")}>设置</button> */}

      {/* <label htmlFor="radio1">男</label>
      <input
        type="radio"
        id="radio1"
        name="gender"
        value="male"
        onChange={handleChange}
        checked={gender === "male"}
      />
      <label htmlFor="radio2">女</label>
      <input
        type="radio"
        id="radio2"
        name="gender"
        value="female"
        onChange={handleChange}
        checked={gender === "female"}
      /> */}

      {/* <label htmlFor="checkbox1">选中</label>
      <input
        type="checkbox"
        id="checkbox1"
        onChange={toggleChecked}
        checked={checked}
      />
      {JSON.stringify(checked)} */}

      {/* <label htmlFor="checkbox1">北京</label>
      <input
        type="checkbox"
        id="checkbox1"
        value="beijing"
        checked={selectedCityList.includes("beijing")}
        onChange={handleCityChange}
      />
      <label htmlFor="checkbox2">上海</label>
      <input
        type="checkbox"
        id="checkbox2"
        value="shanghai"
        checked={selectedCityList.includes("shanghai")}
        onChange={handleCityChange}
      />
      <label htmlFor="checkbox3">杭州</label>
      <input
        type="checkbox"
        id="checkbox3"
        value="hangzhou"
        checked={selectedCityList.includes("hangzhou")}
        onChange={handleCityChange}
      />
      {JSON.stringify(selectedCityList)}
      { 提交到表单上面去，可以通过这个方式提交 }
      <input type="hidden" name="cities" value={JSON.stringify(selectedCityList)}/> */}

      {/* <select value={lang} onChange={handleChange}>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JS">JS</option>
      </select> */}
    </>
  );
};

export default Demo;
