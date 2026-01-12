/**
 * Centralized Media Configuration
 * 
 * This file manages all images and videos used across the website.
 * Update this file to change media assets site-wide or for campaigns.
 * 
 * Usage:
 *   import { media } from '@/config/media';
 *   <img src={media.hero.default} alt="Hero" />
 * 
 * Campaigns:
 *   import { getCampaignMedia } from '@/config/media';
 *   const campaign = getCampaignMedia('summer-2024');
 */

type MediaConfig = {
  hero: {
    default: string;
    video?: string;
    [key: string]: string | undefined;
  };
  destinations: Record<string, string>;
  testimonials: {
    avatars: Record<string, string>;
  };
  cta: {
    default: string;
    adventure?: string;
    luxury?: string;
  };
  about: {
    hero: string;
    team?: Record<string, string>;
  };
  services: Record<string, string>;
  campaigns?: Record<string, CampaignMedia>;
};

type CampaignMedia = {
  hero: string;
  cta?: string;
  destinations?: Record<string, string>;
  video?: string;
};

// Base media configuration
const baseMedia: MediaConfig = {
  hero: {
    default: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2568&auto=format&fit=crop",
    // Local alternative: "/images/hero/default.jpg"
    winter: "/images/hero/winter.png",
    video: "/videos/hero/travelling-video-hd_1920_1080_25fps.mp4",
  },
  destinations: {
    santorini: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1935&auto=format&fit=crop",
    bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop",
    maldives: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1965&auto=format&fit=crop",
    kyoto: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    "amalfi-coast": "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=2070&auto=format&fit=crop",
    marrakech: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1974&auto=format&fit=crop",
  },
  testimonials: {
    avatars: {
      "sarah-mitchell": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      "james-cooper": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      "michael-chen": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      "alexandra-petrova": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    },
  },
  cta: {
    default: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
    adventure: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
    luxury: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
  },
  about: {
    hero: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
  },
  services: {
    planning: "/images/services/planning.jpg",
    concierge: "/images/services/concierge.jpg",
    "group-travel": "/images/services/group-travel.jpg",
    honeymoon: "/images/services/honeymoon.jpg",
    adventure: "/images/services/adventure.jpg",
    "ai-assistant": "/images/services/ai-assistant.jpg",
  },
  campaigns: {
    "summer-2024": {
      hero: "/images/campaigns/summer-2024/hero.jpg",
      cta: "/images/campaigns/summer-2024/cta.jpg",
      destinations: {
        santorini: "/images/campaigns/summer-2024/santorini.jpg",
        bali: "/images/campaigns/summer-2024/bali.jpg",
      },
    },
    "winter-2024": {
      hero: "/images/campaigns/winter-2024/hero.jpg",
      cta: "/images/campaigns/winter-2024/cta.jpg",
    },
    "black-friday-2024": {
      hero: "/images/campaigns/black-friday-2024/hero.jpg",
      cta: "/images/campaigns/black-friday-2024/cta.jpg",
    },
  },
};

/**
 * Get active campaign name from environment variable
 */
function getActiveCampaign(): string | null {
  if (typeof window !== "undefined") {
    return process.env.NEXT_PUBLIC_CAMPAIGN || null;
  }
  return process.env.NEXT_PUBLIC_CAMPAIGN || null;
}

/**
 * Get media with campaign overrides applied
 */
export function getMedia(): MediaConfig {
  const activeCampaign = getActiveCampaign();
  
  if (!activeCampaign || !baseMedia.campaigns?.[activeCampaign]) {
    return baseMedia;
  }

  const campaign = baseMedia.campaigns[activeCampaign];
  
  return {
    ...baseMedia,
    hero: {
      ...baseMedia.hero,
      default: campaign.hero,
      video: campaign.video,
    },
    cta: {
      ...baseMedia.cta,
      default: campaign.cta || baseMedia.cta.default,
    },
    destinations: {
      ...baseMedia.destinations,
      ...(campaign.destinations || {}),
    },
  };
}

/**
 * Get campaign-specific media
 */
export function getCampaignMedia(campaignName: string): CampaignMedia | null {
  return baseMedia.campaigns?.[campaignName] || null;
}

/**
 * Get destination image by key
 */
export function getDestinationImage(destinationKey: string): string {
  const media = getMedia();
  return media.destinations[destinationKey] || media.destinations.santorini;
}

/**
 * Get testimonial avatar by name
 */
export function getTestimonialAvatar(name: string): string {
  const media = getMedia();
  const key = name.toLowerCase().replace(/\s+/g, "-");
  return media.testimonials.avatars[key] || media.testimonials.avatars["sarah-mitchell"];
}

/**
 * Get responsive image paths (if you create multiple sizes)
 * Usage: const images = getResponsiveImage('santorini');
 */
export function getResponsiveImage(
  imageKey: string,
  basePath: string = "/images"
): {
  mobile: string;
  tablet: string;
  desktop: string;
} {
  return {
    mobile: `${basePath}/${imageKey}-768x432.jpg`,
    tablet: `${basePath}/${imageKey}-1280x720.jpg`,
    desktop: `${basePath}/${imageKey}-1920x1080.jpg`,
  };
}

/**
 * Check if campaign is active
 */
export function isCampaignActive(campaignName: string): boolean {
  return getActiveCampaign() === campaignName;
}

/**
 * Get all available campaigns
 */
export function getAvailableCampaigns(): string[] {
  return Object.keys(baseMedia.campaigns || {});
}

// Export the media config (with campaign overrides applied)
export const media = getMedia();

// Export base config for direct access if needed
export const baseMediaConfig = baseMedia;
