export const FeedBack = () => {
    const feeds = [
        {
            imgUrl: 'F',
            feedText: 'I was skeptical at first, but this app surprised me, it is perfect companion for finding and reading lecture notes and past questions. It help me improve my learning strategies.',
            user: 'Flash',
            course: 'CYB'
        },
        {
            imgUrl: 'A',
            feedText: 'Initially unsure, this app exceeded my expectations. It is an invaluable aid for accessing and studying lecture materials and past exams, significantly enhancing my learning journey.',
            user: 'Ansar',
            course: 'ICT'
        },
        {
            imgUrl: 'I',
            feedText: 'At first hesitant, I am impressed by this apps capabilities. It is become an indispensable tool for locating and reviewing lecture notes and past assessments, elevating my study methods.',
            user: 'Imam MDV',
            course: 'CSC'
        },
        {
            imgUrl: 'R',
            feedText: 'Though doubtful initially, this app has proven its worth. It is an indispensable resource for sourcing and studying lecture notes and previous exam papers, revolutionizing my approach to learning',
            user: 'Ridwan Bala',
            course: 'ICT'
        },
    ]
    return(
    <div className="w-full ml-auto py-5 px-5 mb-10 mt-8 mr-auto h-auto">
        <div>
          <p className="w-[50%] mt-5 ml-auto mb-9 mr-auto text-center text-2xl lg:text-4xl">
            How Webuzz changed lives
          </p>
        </div>
        <div className="w-95% h-auto lg:flex lg:flex-wrap">
           {
            feeds && feeds.map((feed,i) => (
                <>
                <div className="lg:w-[45%] w-[94%] ml-auto  mr-auto py-3 px-4 h-[350px] lg:h-[300px] rounded-2xl mt-5 bg-navBar/30">
             <div className="w-12 h-[48px] rounded-full ml-4 py-2.5 bg-black px-2 mt-5 flex">
                <div className="w-[55px] py-0.5 px-0.5 text-center rounded-full" >
                    <p>{feed.imgUrl}</p>
                </div>
             </div>
             <div className="w-full lg:h-[120px] py-0.5 px-4  flex">
                <p className="w-[97%] h-auto mt-5" >
                  {feed.feedText}
                </p>
             </div>
             <div className="w-full h-[60px] py-0.5 lg:px-0 px-4 lg:mt-1 mt-2  flex flex-col">
                <p className="w-[97%] text-end h-auto lg:mt-1 mb-0.5" >
                  {`"${feed.user}"`}
                </p>
                <p className="w-[97%] text-end h-auto lg:mt-1 mt-0.5" >
                  {`${feed.course}`}
                </p>
             </div>
           </div>
                </>
            ))
           }
        </div>
    </div>
    )
}