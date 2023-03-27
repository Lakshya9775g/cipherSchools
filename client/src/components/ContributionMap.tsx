import React, { useState, useEffect } from "react";

const contributionData = [
  { date: "2022-03-01", count: 10 },
  { date: "2022-03-02", count: 0 },
  { date: "2022-03-03", count: 5 },
  // ...
];

const ContributionMap = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // TODO: fetch contribution data from API or local storage
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // TODO: handle user selection of a date
  };

  return (
    <div className="contribution-map">
      {contributionData.map(({ date, count }) => (
        <ContributionTile
          key={date}
          date={date}
          count={count}
          isSelected={date === selectedDate}
          onClick={() => handleDateClick(date)}
        />
      ))}
    </div>
  );
};

const ContributionTile = ({ date, count, isSelected, onClick }) => {
  const tileClassNames = ["contribution-tile"];
  if (isSelected) {
    tileClassNames.push("selected");
  }

  return (
    <div className={tileClassNames.join(" ")} onClick={onClick}>
      <span className="contribution-date">{date}</span>
      <span className="contribution-count">{count}</span>
    </div>
  );
};

export default ContributionMap;
