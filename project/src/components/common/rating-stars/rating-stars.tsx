type RatingStarsProps = {
  rating: number;
  specifyClassWord: string;
};

function RatingStars({ rating, specifyClassWord }: RatingStarsProps ): JSX.Element {
  const percentage = 20;
  return (
    <div className={`${ specifyClassWord }__rating rating`}>
      <div className={`${ specifyClassWord }__stars rating__stars`}>
        <span style={{ width: `${ Math.round (rating) * percentage }%`}} />
        <span className="visually-hidden">Rating</span>
      </div>
      { specifyClassWord === 'property' && <span className="property__rating-value rating__value">{ rating }</span> }
    </div>
  );
}

export default RatingStars;
