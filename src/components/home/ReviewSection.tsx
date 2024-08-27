import { AiFillStar } from "react-icons/ai";
import { ReviewCard } from "../cards";

const demoReviews = [
  {
    _id: "2",
    userId: { name: "Bob Smith" },
    rating: 5,
    createdAt: "2024-08-20T00:00:00Z",
    review:
      "Excellent service from start to finish. 100% satisfaction with the job, professionalism, and overall service. We were delighted with your courteous, prompt, and professional service. We would plan to reuse your services and highly recommend it.",
  },
  {
    _id: "3",
    userId: { name: "Charlie Brown" },
    rating: 3,
    createdAt: "2024-08-15T00:00:00Z",
    review:
      "Went for a tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guided as per your budget. Highly recommend.",
  },
  {
    _id: "4",
    userId: { name: "David White" },
    rating: 4,
    createdAt: "2024-08-10T00:00:00Z",
    review:
      "Best tyre shop in Indirapuram. Good dealing with customers. All types of tyres available here. Prices are also reasonable. Overall good experience.",
  },
];

const Reviews = () => {
  return (
    <section className="bg-white rounded-md flex flex-col gap-4 p-4 md:p-8 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mt-8 lg:mt-12">
      <aside className="">
        <div className="pb-6 flex flex-col md:flex-row justify-between md:items-center gap-4">
          <h2 className="flex items-center gap-2 text-xl md:text-2xl font-semibold">
            <AiFillStar className="text-amber-400" />
            All Reviews
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demoReviews?.map((item: any, index: number) => (
            <ReviewCard item={item} key={item._id} index={index} />
          ))}
        </div>
      </aside>
    </section>
  );
};

export default Reviews;
