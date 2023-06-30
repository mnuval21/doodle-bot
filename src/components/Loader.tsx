export const Loader = () => {
  let circleCommonClasses = 'circle animate-loader';

  return (
    <div className='flex justify-center'>
        <div className={`${circleCommonClasses}`}></div>
          <div
              className={`${circleCommonClasses} animation-delay-200`}
          ></div>
          <div className={`${circleCommonClasses} animation-delay-400`}></div>
      </div>
  );
};

//TODO: Add a loader to the page while the AI is painting
//also ensure this works
