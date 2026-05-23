import React from "react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const post = blogPosts.find((p) => p.slug === "humanitarian-aid-nepal-students")!;

const HumanitarianAidNepal = () => (
  <BlogArticleLayout post={post}>
    <h2>Beyond the Environment: Why Humanitarian Aid Is Central to EHH Nepal's Mission</h2>
    <p>
      When most people think about environmental organizations, they picture tree planting and clean-up drives. And while EHH Nepal certainly does those things — and does them well — our mission goes much further. The "H" in EHH Nepal stands for <strong>Humanity</strong>, and that is not an accident.
    </p>
    <p>
      At EHH Nepal, we believe that environmental sustainability and human wellbeing are inseparable. You cannot have one without the other. A family living in poverty will cut down trees to survive. A community without clean water will pollute its own rivers out of necessity. Environmental destruction and human suffering feed each other in a devastating cycle — and breaking that cycle requires addressing both simultaneously.
    </p>
    <p>
      This is why <strong>humanitarian aid is a core pillar of EHH Nepal's work</strong>, alongside our environmental programs.
    </p>

    <h2>Nepal's Humanitarian Challenges</h2>
    <p>
      Nepal is a country of extraordinary beauty and resilience — but also of significant humanitarian challenges. Understanding these challenges helps explain why EHH Nepal's dual environmental-humanitarian approach is so essential.
    </p>

    <h3>Natural Disasters and Climate-Related Emergencies</h3>
    <p>
      Nepal is one of the world's most disaster-prone countries. Every year, earthquakes, floods, landslides, and droughts affect millions of Nepalis. The 2015 Gorkha earthquake killed nearly 9,000 people and injured over 22,000. Annual monsoon floods regularly displace tens of thousands of families in the Terai plains. Landslides — increasingly frequent due to deforestation and climate change — destroy roads, bridges, and entire villages.
    </p>
    <p>
      When disaster strikes, the communities most affected are often those that are already most vulnerable: poor, remote, and with the least access to government services. EHH Nepal volunteers are trained to respond rapidly to these emergencies, providing relief, support, and solidarity.
    </p>

    <h3>Poverty and Food Insecurity</h3>
    <p>
      Despite significant progress in recent decades, approximately <strong>25% of Nepal's population</strong> lives below the national poverty line. Food insecurity affects millions — particularly in remote mountain districts and the mid-west region, where agricultural productivity is low and market access is limited. Climate change is making this worse, disrupting growing seasons and reducing crop yields.
    </p>

    <h3>Access to Education and Healthcare</h3>
    <p>
      In many of Nepal's 77 districts — particularly in remote and rural areas — access to quality education and healthcare remains severely limited. Schools lack resources, teachers, and proper facilities. Health posts are understaffed and undersupplied. EHH Nepal's humanitarian work includes supporting educational initiatives and health campaigns that help bridge these gaps.
    </p>

    <h3>Gender Inequality</h3>
    <p>
      Nepal has made significant progress on gender equality, but challenges remain. Women and girls in rural areas often face barriers to education, economic opportunity, and participation in community decision-making. EHH Nepal is committed to ensuring that girls are equally represented and empowered within our organization and our programs.
    </p>

    <h2>How EHH Nepal Delivers Humanitarian Aid</h2>
    <p>
      EHH Nepal's approach to humanitarian aid is student-led, community-centred, and built around four core types of intervention:
    </p>

    <h3>1. Disaster Relief and Emergency Response</h3>
    <p>
      When natural disasters strike in districts where EHH Nepal has active chapters, our members mobilize quickly to support affected communities. This may include:
    </p>
    <ul>
      <li>Distributing emergency supplies (food, clean water, blankets, hygiene kits)</li>
      <li>Helping with rescue and evacuation operations</li>
      <li>Supporting temporary shelter construction</li>
      <li>Providing psychological support and solidarity to disaster survivors</li>
      <li>Assisting with post-disaster clean-up and rebuilding</li>
    </ul>

    <h3>2. Community Health Campaigns</h3>
    <p>
      EHH Nepal organizes health awareness campaigns in schools and communities, covering topics such as clean water and sanitation, hygiene, nutrition, mental health, and preventive healthcare. In many remote districts, basic health information is simply not available — our campaigns help fill that gap.
    </p>

    <h3>3. Educational Support Initiatives</h3>
    <p>
      Education is the most powerful tool for long-term humanitarian impact. EHH Nepal supports local schools through:
    </p>
    <ul>
      <li>Environmental education curriculum development (read more in our article on{" "}
        <Link to="/blog/environmental-education-nepal-schools">environmental education in Nepal</Link>)</li>
      <li>Tutoring and mentorship programs for underprivileged students</li>
      <li>Donations of school supplies, books, and learning materials</li>
      <li>Advocacy for improved school infrastructure in remote districts</li>
    </ul>

    <h3>4. Community Development Projects</h3>
    <p>
      Long-term humanitarian impact requires community development — not just emergency relief. EHH Nepal works with communities to identify and address their most pressing needs, including water access, sanitation, livelihood support, and environmental restoration. Our tree plantation programs often serve a dual purpose: environmental restoration AND livelihood improvement for communities that depend on forests.
    </p>

    <h2>The Connection Between Environment and Humanity</h2>
    <p>
      EHH Nepal's dual mission — environmental and humanitarian — is not a contradiction. It is, in fact, the most coherent possible response to Nepal's challenges.
    </p>
    <p>
      Consider this: when EHH Nepal plants trees on a hillside above a village, we are simultaneously:
    </p>
    <ul>
      <li>Sequestering carbon and fighting climate change</li>
      <li>Protecting the village from landslides</li>
      <li>Ensuring water availability for drinking and irrigation</li>
      <li>Supporting the biodiversity that sustains local ecosystems</li>
      <li>Providing potential livelihood opportunities through non-timber forest products</li>
    </ul>
    <p>
      This is the EHH Nepal approach: actions that serve both people and the planet, simultaneously. It is the most efficient, most impactful, and most human way to do environmental work.
    </p>

    <h2>How You Can Support EHH Nepal's Humanitarian Work</h2>
    <p>
      Whether you are a student, teacher, professional, or concerned citizen, there are many ways to support EHH Nepal's humanitarian mission:
    </p>
    <ul>
      <li><strong>Join EHH Nepal</strong> — become an active volunteer in your district</li>
      <li><strong>Participate in humanitarian campaigns</strong> — community clean-ups, health drives, educational support events</li>
      <li><strong>Donate supplies</strong> — school materials, hygiene kits, first aid supplies for disaster-affected communities</li>
      <li><strong>Spread awareness</strong> — share information about EHH Nepal's work with your network</li>
      <li><strong>Advocate</strong> — speak up for the policies and investments Nepal needs to protect its most vulnerable people</li>
    </ul>

    <h2>Nepal's People Are EHH Nepal's Mission</h2>
    <p>
      At the end of the day, EHH Nepal exists for the people of Nepal. For the farmer in Dang who is watching his crops fail. For the family in Sindhupalchok who lost their home to a landslide. For the girl in Karnali who deserves the same quality education as a student in Kathmandu. For the child in Birgunj breathing polluted air.
    </p>
    <p>
      We exist for all of them. And we exist because of the students — across all 77 districts — who have decided that doing nothing is not an option.
    </p>
    <p>
      <Link to="/blog/how-to-join-ehh-nepal">Join EHH Nepal today</Link> and be part of the humanitarian movement that Nepal needs.
    </p>
  </BlogArticleLayout>
);

export default HumanitarianAidNepal;
