import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Alex P.',
    rating: 5,
    comment: 'Sydney captured our engagement perfectly. Highly recommend!'
  },
  {
    id: 2,
    name: 'Jamie L.',
    rating: 4,
    comment: 'Professional and creative. The final photos were stunning.'
  },
  {
    id: 3,
    name: 'Morgan S.',
    rating: 5,
    comment: 'Great experience from start to finish. Loved the results!'
  }
];

function StarRating({ rating }) {
  return (
    <div className="text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
}

export default function ReviewSection() {
  return (
    <section id="reviews" className="py-16 px-6 bg-gray-900 max-w-6xl mx-auto">
      <h3 className="text-3xl font-semibold mb-8 text-center">Reviews</h3>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border border-gray-700 p-6 rounded-md shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">{review.name}</span>
              <StarRating rating={review.rating} />
            </div>
            <p className="text-gray-300">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
