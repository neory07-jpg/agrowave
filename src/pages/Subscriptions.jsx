import { useState } from 'react'

export default function Subscriptions({ user }) {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [currentSubscription, setCurrentSubscription] = useState(null)

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 5000,
      billingPeriod: 'month',
      description: 'Perfect for small farms',
      features: [
        'Up to 5 orders/month',
        'Basic analytics',
        'Email support',
        'Farm dashboard',
        'Product recommendations'
      ],
      cta: 'Choose Plan',
      highlighted: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 15000,
      billingPeriod: 'month',
      description: 'For growing farms',
      features: [
        'Unlimited orders',
        'Advanced analytics',
        'Priority email & chat support',
        'Farm dashboard',
        'Product recommendations',
        'Bulk order discounts (10%)',
        'Weather forecasts',
        'Crop planning tools'
      ],
      cta: 'Choose Plan',
      highlighted: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 50000,
      billingPeriod: 'month',
      description: 'For large operations',
      features: [
        'Unlimited orders',
        'Custom analytics',
        '24/7 phone & email support',
        'Dedicated account manager',
        'Farm dashboard',
        'Product recommendations',
        'Bulk order discounts (25%)',
        'Weather forecasts',
        'Crop planning tools',
        'API access',
        'Custom integrations',
        'Training & onboarding'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ]

  const handleSubscribe = (plan) => {
    setCurrentSubscription(plan)
    setSelectedPlan(null)
    alert(`You've successfully subscribed to the ${plan.name} plan!`)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Plan</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Select the perfect subscription plan for your farm. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Current Subscription */}
      {currentSubscription && (
        <div className="mb-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-slate-700">
            <span className="font-bold">Current Subscription:</span> {currentSubscription.name} - ₦{currentSubscription.price.toLocaleString()} / {currentSubscription.billingPeriod}
          </p>
          <p className="text-sm text-slate-600 mt-2">Your next billing date is in 28 days</p>
        </div>
      )}

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {plans.map(plan => (
          <div
            key={plan.id}
            className={`rounded-2xl overflow-hidden transition transform hover:scale-105 ${
              plan.highlighted
                ? 'md:scale-105 bg-gradient-to-br from-blue-600 to-emerald-600 text-white shadow-2xl'
                : 'bg-white text-slate-900 shadow-lg border border-slate-200'
            }`}
          >
            {/* Plan Header */}
            <div className={`p-8 ${plan.highlighted ? 'bg-opacity-80' : ''}`}>
              {plan.highlighted && (
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                  plan.highlighted ? 'bg-yellow-300 text-slate-900' : ''
                }`}>
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold">₦{plan.price.toLocaleString()}</span>
                <span className={`ml-2 text-sm ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                  / {plan.billingPeriod}
                </span>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleSubscribe(plan)}
                className={`w-full font-bold py-3 rounded-lg transition ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>

            {/* Features */}
            <div className={`p-8 ${plan.highlighted ? 'bg-blue-700 bg-opacity-50' : 'bg-slate-50'}`}>
              <p className={`text-sm font-bold mb-4 uppercase tracking-wide ${
                plan.highlighted ? 'text-blue-100' : 'text-slate-600'
              }`}>
                Includes:
              </p>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`text-lg ${plan.highlighted ? 'text-yellow-300' : 'text-emerald-600'}`}>✓</span>
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-slate-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Can I change plans anytime?</h3>
            <p className="text-slate-600">
              Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">What payment methods do you accept?</h3>
            <p className="text-slate-600">
              We accept bank transfers, card payments, and mobile money (MTN, Airtel, GLO) for your convenience.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Is there a free trial?</h3>
            <p className="text-slate-600">
              Absolutely! All new users get a 7-day free trial on any plan. No credit card required to get started.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Can I cancel my subscription?</h3>
            <p className="text-slate-600">
              Yes, you can cancel anytime without any penalties. Your access continues until the end of your current billing period.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Do you offer discounts for annual billing?</h3>
            <p className="text-slate-600">
              Yes! Pay annually and save 20% on any plan. Contact our sales team for more information.
            </p>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
          <div className="text-4xl mb-4">📞</div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
          <p className="text-slate-600 mb-4">+234 800 123 4567</p>
          <p className="text-sm text-slate-500">Mon-Fri, 9am-5pm WAT</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
          <div className="text-4xl mb-4">✉️</div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Email Support</h3>
          <p className="text-slate-600 mb-4">support@agrowave.com</p>
          <p className="text-sm text-slate-500">We reply within 24 hours</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Live Chat</h3>
          <p className="text-slate-600 mb-4">Chat with our team now</p>
          <p className="text-sm text-slate-500">Available 9am-6pm WAT</p>
        </div>
      </div>
    </div>
  )
}