import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCities extends Struct.ComponentSchema {
  collectionName: 'components_shared_cities';
  info: {
    displayName: 'cities';
  };
  attributes: {
    cities: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedCounties extends Struct.ComponentSchema {
  collectionName: 'components_shared_counties';
  info: {
    description: '';
    displayName: 'counties';
  };
  attributes: {
    cities: Schema.Attribute.Component<'shared.cities', true>;
    countyLabel: Schema.Attribute.String;
  };
}

export interface SharedEmail extends Struct.ComponentSchema {
  collectionName: 'components_shared_emails';
  info: {
    description: '';
    displayName: 'email';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    target: Schema.Attribute.String;
  };
}

export interface SharedFacebook extends Struct.ComponentSchema {
  collectionName: 'components_shared_facebooks';
  info: {
    displayName: 'facebook';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    target: Schema.Attribute.String;
  };
}

export interface SharedFinancing extends Struct.ComponentSchema {
  collectionName: 'components_shared_financings';
  info: {
    description: '';
    displayName: 'financing';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    target: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedLocations extends Struct.ComponentSchema {
  collectionName: 'components_shared_locations';
  info: {
    description: '';
    displayName: 'locations';
  };
  attributes: {
    counties: Schema.Attribute.Component<'shared.counties', true>;
    label: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavBar extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_bars';
  info: {
    description: '';
    displayName: 'NavBar';
  };
  attributes: {
    aboutUs: Schema.Attribute.Component<'shared.financing', false>;
    blog: Schema.Attribute.Component<'shared.financing', false>;
    financing: Schema.Attribute.Component<'shared.financing', false>;
    freeEstimates: Schema.Attribute.Component<'shared.financing', false>;
    locations: Schema.Attribute.Component<'shared.locations', true>;
    logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    projects: Schema.Attribute.Component<'shared.financing', false>;
  };
}

export interface SharedPhone extends Struct.ComponentSchema {
  collectionName: 'components_shared_phones';
  info: {
    description: '';
    displayName: 'phone';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'services';
  };
  attributes: {};
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTopBar extends Struct.ComponentSchema {
  collectionName: 'components_shared_top_bars';
  info: {
    description: '';
    displayName: 'TopBar';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.Component<'shared.email', false>;
    facebook: Schema.Attribute.Component<'shared.facebook', false>;
    phoneNumber: Schema.Attribute.Component<'shared.phone', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.cities': SharedCities;
      'shared.counties': SharedCounties;
      'shared.email': SharedEmail;
      'shared.facebook': SharedFacebook;
      'shared.financing': SharedFinancing;
      'shared.hero': SharedHero;
      'shared.locations': SharedLocations;
      'shared.media': SharedMedia;
      'shared.nav-bar': SharedNavBar;
      'shared.phone': SharedPhone;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.services': SharedServices;
      'shared.slider': SharedSlider;
      'shared.top-bar': SharedTopBar;
    }
  }
}
