function Rating() {
  return (
    <div className="flex items-center justify-center heading">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          style={{ color: '#FFD700', fontSize: '24px', marginRight: '5px' }}
        >
          &#9733; 
        </span>
      ))}
    </div>
  );
}

export default Rating;
