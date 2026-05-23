import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "climate-change-nepal-youth-action")!;

const ClimateChangeNepalYouth = () => (
  <BlogArticleLayout post={post}>
    <h2>Nepal and the Climate Crisis: Why This Matters More Here Than Almost Anywhere</h2>
    <p>
      Nestled between the Himalayas and the Ganges plains, Nepal is one of the world's most geographically and ecologically diverse countries. But this beauty comes with a profound vulnerability. Nepal has consistently ranked as one of the <strong>top 5 most climate-vulnerable countries on earth</strong>, according to the Global Climate Risk Index. The reason? A combination of extreme geography, limited resources, and an economy deeply tied to agriculture and natural resources.
    </p>
    <p>
      For young Nepalis, climate change is not an abstract problem debated in international summits. It is the reality of watching rivers swell and destroy their villages. It is the reality of farmers in the Terai seeing their harvests fail. It is the reality of communities in the mountains watching centuries-old glaciers disappear before their eyes.
    </p>

    <h2>How Climate Change is Already Affecting Nepal</h2>
    <p>
      The impacts of climate change in Nepal are wide-ranging and deeply personal. Here are the key ways that a changing climate is already affecting Nepali communities:
    </p>

    <h3>1. Melting Glaciers and Glacial Lake Outburst Floods (GLOFs)</h3>
    <p>
      Nepal is home to over <strong>3,000 glacial lakes</strong>, many of which are growing larger as glaciers melt at an accelerating pace. When these lakes breach their natural dams, the resulting floods — called Glacial Lake Outburst Floods (GLOFs) — can be catastrophic, destroying bridges, homes, farmland, and lives in minutes. In 2024 alone, Nepal experienced several major flood events linked to glacial activity.
    </p>

    <h3>2. Erratic Monsoons and Water Scarcity</h3>
    <p>
      Nepal receives the majority of its rainfall during the monsoon season (June–September). Climate change is making monsoon rainfall increasingly erratic — some years bring devastating floods, while others bring severe drought. This unpredictability is devastating for Nepal's 40%+ of the population that depends directly on rain-fed agriculture.
    </p>

    <h3>3. Air Pollution and Respiratory Disease</h3>
    <p>
      Kathmandu Valley regularly records some of the worst air quality readings in all of Asia. Rapid urbanization, vehicle emissions, brick kilns, and agricultural burning all contribute to dangerous levels of particulate matter (PM2.5). Children and elderly people are most vulnerable, with respiratory diseases rising sharply in recent decades.
    </p>

    <h3>4. Loss of Biodiversity</h3>
    <p>
      Nepal is home to extraordinary biodiversity — from Bengal tigers and one-horned rhinos in Chitwan to snow leopards in the high Himalayas. Climate change is disrupting the habitats these animals depend on, pushing many species toward endangerment. Forest loss compounds this problem, destroying the corridors wildlife needs to survive.
    </p>

    <h3>5. Food Security and Agriculture</h3>
    <p>
      Changing temperatures and rainfall patterns are reducing crop yields across Nepal. Rice, wheat, and maize — staple foods for millions — are all threatened by climate shifts. In mountain districts, traditional farming systems that have sustained communities for centuries are being disrupted by unpredictable weather.
    </p>

    <h2>What Young People in Nepal Are Doing About It</h2>
    <p>
      Despite these daunting challenges, Nepal's youth are responding with remarkable energy and creativity. Across the country, young students are organizing environmental campaigns, planting trees, advocating for policy change, and building community resilience. <strong>EHH Nepal</strong> is proud to be at the centre of this movement.
    </p>

    <h3>Tree Plantation Drives</h3>
    <p>
      One of the most direct actions young people can take is to plant trees. Forests act as natural carbon sinks, absorbing CO₂ from the atmosphere. They also protect watersheds, prevent landslides, support biodiversity, and provide livelihoods for rural communities. EHH Nepal has already planted over <strong>2,500 trees</strong> across Nepal, with ambitious plans to expand dramatically. Learn more in our article on{" "}
      <Link to="/blog/tree-plantation-nepal">tree plantation in Nepal</Link>.
    </p>

    <h3>Awareness Campaigns in Schools and Colleges</h3>
    <p>
      Knowledge is power. EHH Nepal runs climate awareness campaigns in schools and colleges across Nepal, helping young people understand the science of climate change, its local impacts, and concrete steps they can take. When students understand the problem, they become advocates — influencing their families, communities, and eventually their governments.
    </p>

    <h3>Community Clean-Up Initiatives</h3>
    <p>
      Waste pollution is a visible and immediate environmental challenge in Nepal. Rivers, public spaces, and tourist areas are frequently littered with plastic and other waste. EHH Nepal organizes regular community clean-up drives, not just to remove waste, but to change attitudes about littering and waste management.
    </p>

    <h3>Humanitarian Response to Climate Disasters</h3>
    <p>
      When floods, landslides, and other climate-related disasters strike, EHH Nepal volunteers are there to help. Our humanitarian work includes emergency relief, community support, and post-disaster recovery assistance. Read more in our article on{" "}
      <Link to="/blog/humanitarian-aid-nepal-students">humanitarian aid in Nepal</Link>.
    </p>

    <h2>What You Can Do Right Now</h2>
    <p>
      You don't need to be a scientist or a politician to fight climate change. You need to be a committed young person willing to take action. Here's how:
    </p>
    <ol>
      <li><strong>Join EHH Nepal</strong> — register at our website and connect with students across all 77 districts</li>
      <li><strong>Plant a tree</strong> — even planting a single tree in your garden or community makes a difference</li>
      <li><strong>Reduce your carbon footprint</strong> — use public transport, reduce plastic use, save electricity</li>
      <li><strong>Educate others</strong> — share information about climate change with your family and classmates</li>
      <li><strong>Advocate</strong> — write to local officials, participate in climate marches, and demand government action</li>
    </ol>

    <h2>Nepal's Climate Future: Pessimism Is Not an Option</h2>
    <p>
      The challenges Nepal faces from climate change are immense. But so is the resilience and creativity of Nepal's people — especially its youth. Every tree planted, every awareness campaign run, every student who joins EHH Nepal is a vote for a better, more sustainable Nepal.
    </p>
    <p>
      The next generation of Nepali leaders — people who will make laws, build businesses, teach children, and care for communities — are students today. The values, knowledge, and habits they develop now will shape Nepal's environmental future for decades to come.
    </p>
    <p>
      EHH Nepal exists to ensure that future is a green one. <Link to="/blog/how-to-join-ehh-nepal">Join us</Link>.
    </p>
  </BlogArticleLayout>
);

export default ClimateChangeNepalYouth;
