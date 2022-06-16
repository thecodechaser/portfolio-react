const CommentForm = (props) => {
  const {postId} = props;
  return (
    <div className="flex flex-col gap-4 ml-4 mt-10">
      <h3 className="text-lg">Drop your comment</h3>
       <input
          type="text"
          name="user_name"
          required
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          maxLength="30"
          placeholder="Name"
          className="w-64 md:w-72 p-2 rounded text-primaryColor
      focus:border-2 focus:border-secondaryColor focus:outline-none"
        />
         <textarea
          rows="5"
          name="user_msg"
          required
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
          maxLength="500"
          placeholder="Write your comment here"
          className="w-64 md:w-72 p-2 rounded text-primaryColor
          focus:border-2 focus:border-secondaryColor focus:outline-none"
        />
         {
        fieldsNotice && (
          <span className="text-skyColor text-center text-base">Please fill all fields</span>
        )
      }
        {
        successNotice && (
          <span className="text-skyColor text-center text-base">Thanks for your comment!</span>
        )
      }
        <button  type="button" className="bg-lightBlueColor ml-20 mt-6 rounded w-28 px-4 py-2 text-base text-skyColor font-medium">Submit</button>
    </div>
  )
};

export default CommentForm;