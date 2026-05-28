import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "sustainable-living-nepal-students")!;

const SustainableLivingNepal = () => (
  <BlogArticleLayout post={post}>
    <h2>You Don't Need Money or Power to Live Sustainably</h2>
    <p>
      One of the most common things young Nepalis say when they hear about environmental action is: "I want to help, but what can I actually do?" It is a genuine and important question. Big problems like climate change, deforestation, and pollution can feel overwhelming — too big for any one person to make a difference.
    </p>
    <p>
      But here is the truth that every experienced environmentalist knows: <strong>collective change starts with individual action</strong>. When millions of people make small, consistent changes to the way they live, the cumulative effect is enormous. And in Nepal — where environmental challenges are both urgent and deeply connected to daily life — the opportunities for sustainable living are everywhere.
    </p>
    <p>
      This guide gives you <strong>15 simple, practical changes</strong> that any student in Nepal can start making today — without spending extra money, without special equipment, and without waiting for anyone's permission.
    </p>

    <h2>At Home: Sustainable Changes That Start in Your Own House</h2>

    <h3>1. Switch Off Lights and Electronics When Not in Use</h3>
    <p>
      This is the simplest energy-saving action you can take, and it costs absolutely nothing. Turning off lights, fans, televisions, and phone chargers when you leave a room reduces your household's electricity consumption — lowering your family's electricity bill and reducing Nepal's demand for power generation. In a country where <Link to="/blog/renewable-energy-nepal-youth-advocacy">energy supply is limited</Link>, every kilowatt saved matters.
    </p>

    <h3>2. Unplug Chargers and Devices on Standby</h3>
    <p>
      Devices left on standby — including phone chargers plugged into the wall — continue to draw power even when not actively charging. This "phantom load" or "vampire power" can account for 5–10% of a household's electricity use. Get in the habit of unplugging chargers and switching off power strips when devices are not in use.
    </p>

    <h3>3. Reduce Water Waste</h3>
    <p>
      Clean water is precious in Nepal, and <Link to="/blog/water-pollution-nepal-rivers">water scarcity</Link> is a growing problem. Simple habits save significant amounts of water:
    </p>
    <ul>
      <li>Turn off the tap while brushing your teeth</li>
      <li>Take shorter showers</li>
      <li>Fix dripping taps immediately</li>
      <li>Reuse water from washing vegetables to water plants</li>
      <li>Collect rainwater for garden use</li>
    </ul>

    <h3>4. Start a Home Compost Bin</h3>
    <p>
      Approximately <strong>50–60% of Nepal's solid waste is organic</strong> — food scraps, vegetable peels, and garden waste. When this organic waste goes to landfill, it decomposes anaerobically and releases methane — a powerful greenhouse gas. Instead, start a simple compost bin in your garden or backyard. In 2–3 months, your kitchen scraps will become rich compost that fertilizes your plants and garden. No cost, no chemicals, and you reduce your household's waste by half.
    </p>

    <h3>5. Reduce Meat Consumption</h3>
    <p>
      Meat production — particularly beef — is one of the most carbon-intensive food systems on the planet. Livestock farming contributes to deforestation, water use, and greenhouse gas emissions. You do not need to become vegetarian overnight, but reducing meat consumption — even by one or two days per week — meaningfully reduces your personal environmental footprint. Nepal's traditional vegetarian cuisine is rich, delicious, and sustainable.
    </p>

    <h2>In Your Community: Actions That Inspire Others</h2>

    <h3>6. Carry a Reusable Bag</h3>
    <p>
      Every time you shop — at the bazaar, the vegetable market, the local store — bring your own cloth bag (jhola) instead of accepting a plastic bag. A single reusable bag can replace hundreds of plastic bags over its lifetime. This is the single easiest step toward a <Link to="/blog/plastic-pollution-nepal-solutions">plastic-free Nepal</Link>, and when your neighbours see you doing it, they are inspired to follow.
    </p>

    <h3>7. Use a Reusable Water Bottle</h3>
    <p>
      Plastic water bottles are one of the most common forms of litter across Nepal — from Kathmandu's streets to Everest Base Camp. Carrying a reusable bottle eliminates this waste entirely. If tap water quality is a concern, a good-quality water filter at home is far more economical and environmentally responsible than buying bottled water daily.
    </p>

    <h3>8. Choose Public Transport or Cycle</h3>
    <p>
      <Link to="/blog/air-pollution-kathmandu-nepal">Vehicle emissions are the leading cause of Kathmandu's air pollution.</Link> Every time you choose to walk, cycle, or use public transport instead of a private vehicle, you reduce emissions, reduce traffic congestion, and improve air quality. In Nepal's cities, cycling is also faster than sitting in traffic jams — and it is free.
    </p>

    <h3>9. Plant Something — Anything</h3>
    <p>
      Whether you have a large garden or a small balcony, you can grow something. Even a single potted plant on your window sill improves local air quality, supports pollinators, and connects you to the natural world. If you have more space, plant a fruit tree — it will feed your family, sequester carbon, and provide shade for decades. EHH Nepal organises tree plantation events throughout the year — <Link to="/blog/tree-plantation-nepal">join one in your district</Link>.
    </p>

    <h3>10. Buy Local and Seasonal Food</h3>
    <p>
      Food that is grown locally and eaten in season requires far less transportation, refrigeration, and packaging than imported or out-of-season produce. Nepal's farmers produce extraordinary variety — local vegetables, grains, fruits, and dairy — that is fresher, healthier, cheaper, and more sustainable than imported alternatives. Buying from local farmers and markets directly supports Nepal's agricultural communities and reduces your food's carbon footprint.
    </p>

    <h2>At School: Making Your Campus Greener</h2>

    <h3>11. Start or Join Your School's Environment Club</h3>
    <p>
      The most powerful thing a student can do is not act alone — but organize. Starting or joining your school's environment club connects you with like-minded peers, gives your individual actions collective power, and creates a platform for larger initiatives. EHH Nepal supports school environment clubs across Nepal — read our full guide on <Link to="/blog/start-environmental-club-school-nepal">how to start an environmental club in your school</Link>.
    </p>

    <h3>12. Go Paperless Where Possible</h3>
    <p>
      In the age of smartphones, much of the paper we use is unnecessary. Use the notes app on your phone for quick notes. Share documents digitally instead of printing. Advocate for your school to reduce unnecessary printing. When paper is unavoidable, use both sides and recycle when done.
    </p>

    <h3>13. Refuse Single-Use Plastics at School Events</h3>
    <p>
      School events — sports days, cultural programs, gatherings — often generate enormous amounts of plastic waste from disposable cups, plates, and packaging. Advocate for your school to switch to reusable alternatives, leaf plates (tapari), or biodegradable materials for all school events. Be the student who raises their hand and says: "Can we do this without plastic?"
    </p>

    <h2>In Your Mind: The Most Powerful Sustainability Change of All</h2>

    <h3>14. Learn Continuously and Share What You Know</h3>
    <p>
      Sustainability starts in the mind. The more you learn about environmental science, climate change, and sustainable living, the better equipped you are to make good decisions and inspire others. Read articles (like this one!), follow credible environmental organizations, watch documentaries. Then share what you learn — with classmates, family, on social media. Knowledge multiplied is power multiplied.
    </p>

    <h3>15. Think Long-Term in Every Decision</h3>
    <p>
      Sustainable living is ultimately a mindset — a habit of thinking about the long-term consequences of every decision. Before buying something, ask: Do I need this? How is it made? Where will it end up? Before making a choice, ask: Is this good for my community and my environment in the long run? This kind of thinking is what EHH Nepal tries to cultivate in every member — because it is the foundation of everything else.
    </p>

    <h2>The Compound Effect: Why Small Changes Matter Enormously</h2>
    <p>
      If every student in Nepal who reads this article makes just five of these fifteen changes, the collective impact would be extraordinary. Nepal has millions of students. Each small change, multiplied by millions of people, becomes a transformation.
    </p>
    <p>
      This is the EHH Nepal philosophy: individual actions matter. Collective action transforms. And young people — who are the most numerous, the most energetic, and the ones with the most at stake — are the engine of that transformation.
    </p>
    <p>
      <Link to="/blog/how-to-join-ehh-nepal">Join EHH Nepal</Link> and connect your sustainable living choices with a nationwide movement for a greener Nepal.
    </p>
  </BlogArticleLayout>
);

export default SustainableLivingNepal;
