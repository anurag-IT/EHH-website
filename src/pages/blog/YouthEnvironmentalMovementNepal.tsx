import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "youth-environmental-movement-nepal")!;

const YouthEnvironmentalMovementNepal = () => (
  <BlogArticleLayout post={post}>
    <h2>The Rise of Youth Environmental Activism in Nepal</h2>
    <p>
      Across the world, young people are demanding urgent action on climate change and environmental destruction. In Nepal — a country that is ranked among the most climate-vulnerable nations on earth — this call is more urgent than ever. <strong>EHH Nepal (Earth for Human and Humanity)</strong> stands at the forefront of this movement, uniting students from all 77 districts under a shared mission: protect our planet, serve our people.
    </p>
    <p>
      Founded in 2024 by Aayush Jha, Sameer Yadav, and Anurag Thakur, EHH Nepal is not just another environmental club. It is a nationwide network of passionate, action-oriented young Nepalis who believe that the solutions to our greatest challenges already exist — in the hands of the next generation.
    </p>

    <h2>Why Nepal Needs a Youth Environmental Movement Now</h2>
    <p>
      Nepal's environmental situation is critical. The country is experiencing rapid deforestation, erratic monsoons, glacial lake outburst floods (GLOFs), air pollution in the Kathmandu Valley, and loss of biodiversity at an alarming rate. Climate change is not a distant threat for Nepal — it is happening right now, in the fields, rivers, and mountains that millions of Nepali families depend on.
    </p>
    <p>
      Yet, despite these challenges, meaningful environmental action has been slow to reach ordinary communities — especially in remote districts. This is the gap that EHH Nepal was created to fill. By mobilizing students in every corner of the country, EHH Nepal brings environmental awareness, action, and accountability directly to the grassroots level.
    </p>

    <h3>Nepal's Climate Vulnerability: Key Facts</h3>
    <ul>
      <li>Nepal is ranked as the <strong>4th most climate-vulnerable country</strong> in the world</li>
      <li>Over <strong>3,000 glacial lakes</strong> in Nepal, many at risk of catastrophic outburst floods</li>
      <li>Annual deforestation rate of approximately <strong>1.7%</strong> in some regions</li>
      <li>Kathmandu Valley frequently ranks among Asia's most air-polluted cities</li>
      <li>Over <strong>40% of Nepal's population</strong> depends directly on agriculture — highly vulnerable to climate shifts</li>
    </ul>

    <h2>What is EHH Nepal?</h2>
    <p>
      <strong>EHH Nepal — Earth for Human and Humanity</strong> — is a youth-led organization built on the belief that environmental sustainability and humanitarian service are inseparable. Our approach is simple: empower young people to take real, measurable action in their own communities.
    </p>
    <p>
      Our four-pillar approach includes:
    </p>
    <ol>
      <li><strong>Join:</strong> Any student across Nepal's 77 districts can register and become part of the movement</li>
      <li><strong>Register:</strong> Create your local EHH chapter at your school or college</li>
      <li><strong>Act:</strong> Plant trees, run awareness campaigns, organize community clean-ups, and deliver humanitarian aid</li>
      <li><strong>Track:</strong> Measure and report your impact so it can be shared nationally</li>
    </ol>

    <h2>The 77 Districts Mission: No Community Left Behind</h2>
    <p>
      What sets EHH Nepal apart is our ambition. Most environmental organizations in Nepal are concentrated in Kathmandu or a handful of urban centres. EHH Nepal is different — our goal is to build an active, engaged chapter in every single one of Nepal's 77 districts.
    </p>
    <p>
      This is not easy. It means reaching students in remote mountain districts like Humla, Dolpa, and Mustang — where internet access is limited and resources are scarce. It means building chapters in the Terai plains, in hill communities, in flood-prone river valleys. But we believe that every Nepali student, no matter where they live, deserves the opportunity to participate in the solution.
    </p>

    <blockquote>
      "The environment does not care about district boundaries. Neither do we." — Aayush Jha, Founder & CEO, EHH Nepal
    </blockquote>

    <h2>Our Impact So Far</h2>
    <p>
      Since our founding in 2024, EHH Nepal has already made a tangible difference:
    </p>
    <ul>
      <li><strong>2,500+ trees planted</strong> across Nepal</li>
      <li><strong>200+ students</strong> actively engaged in environmental and humanitarian work</li>
      <li><strong>34 tonnes of CO₂</strong> offset through our collective action</li>
      <li>Active chapters in <strong>2 districts</strong> with rapid expansion underway</li>
    </ul>
    <p>
      These numbers are just the beginning. As we expand to all 77 districts, the collective impact of Nepal's student community will be extraordinary.
    </p>

    <h2>How You Can Be Part of Nepal's Environmental Future</h2>
    <p>
      Whether you are a student in Kathmandu, a teacher in Pokhara, or a young professional in Biratnagar — you have a role to play in Nepal's environmental movement. Here's how to get started:
    </p>
    <ul>
      <li><strong>Join EHH Nepal</strong> by registering through our website</li>
      <li><strong>Start a local chapter</strong> at your school or college</li>
      <li><strong>Plant trees</strong> in your community and track your impact</li>
      <li><strong>Spread the word</strong> — share EHH Nepal's mission with friends and family</li>
      <li><strong>Volunteer</strong> for humanitarian campaigns in your district</li>
    </ul>

    <h2>The Future of Nepal's Environment Starts With You</h2>
    <p>
      Nepal's environmental challenges are real and urgent. But so is the power of Nepal's young people. EHH Nepal exists because we believe — with absolute certainty — that youth-led action is the most powerful force for environmental and social change in this country.
    </p>
    <p>
      We invite you to be part of this movement. Read more about our work, explore our other articles on{" "}
      <Link to="/blog/climate-change-nepal-youth-action">climate change in Nepal</Link> and{" "}
      <Link to="/blog/tree-plantation-nepal">tree plantation initiatives</Link>, or{" "}
      <Link to="/blog/how-to-join-ehh-nepal">learn how to join EHH Nepal today</Link>.
    </p>
    <p>
      The Earth needs us. And we need each other.
    </p>
  </BlogArticleLayout>
);

export default YouthEnvironmentalMovementNepal;
