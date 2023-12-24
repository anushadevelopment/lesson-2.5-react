function Rating({ rating }) {
    let checkedRating = rating;
    if (rating < 0) checkedRating = 0;
    if (rating > 5) checkedRating = 5;
  
    return <span>{Array.from({ length: checkedRating }, (v, i) => "⭐️")}</span>;
  }
  
  export default Rating;