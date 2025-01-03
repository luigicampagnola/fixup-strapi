import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBackgroundImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_background_images';
  info: {
    displayName: 'backgroundImage';
  };
  attributes: {
    alt: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedBlogCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_blog_cards';
  info: {
    displayName: 'BlogCard';
  };
  attributes: {
    date: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_blog_sections';
  info: {
    displayName: 'BlogSection';
    icon: 'information';
  };
  attributes: {
    blogCards: Schema.Attribute.Component<'shared.blog-card', true>;
  };
}

export interface SharedButtonbar extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttonbars';
  info: {
    description: '';
    displayName: 'ButtonBar';
    icon: 'arrowDown';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    createdby: Schema.Attribute.Component<'shared.link', true>;
    privacypolicy: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface SharedCardContainer extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_containers';
  info: {
    description: '';
    displayName: 'CardContainer';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.cards', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    description: '';
    displayName: 'cards';
  };
  attributes: {
    image: Schema.Attribute.Component<'shared.image', false>;
    link: Schema.Attribute.Component<'shared.link', false>;
    name: Schema.Attribute.String;
    options: Schema.Attribute.Component<'shared.text-list', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

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

export interface SharedComment extends Struct.ComponentSchema {
  collectionName: 'components_shared_comments';
  info: {
    displayName: 'comment';
  };
  attributes: {
    comment: Schema.Attribute.Text;
    date: Schema.Attribute.String;
    name: Schema.Attribute.String;
    rate: Schema.Attribute.Integer;
  };
}

export interface SharedContactForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_forms';
  info: {
    description: '';
    displayName: 'ContactForm';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Component<
      'shared.background-image',
      false
    >;
    button: Schema.Attribute.Component<'shared.link', false>;
    captcha: Schema.Attribute.Component<'shared.field-data', false>;
    email: Schema.Attribute.Component<'shared.field-data', false>;
    name: Schema.Attribute.Component<'shared.field-data', false>;
    phone: Schema.Attribute.Component<'shared.field-data', false>;
    sponsors: Schema.Attribute.Component<'shared.slider', false>;
    street: Schema.Attribute.Component<'shared.field-data', false>;
    title: Schema.Attribute.String;
    warning: Schema.Attribute.String;
  };
}

export interface SharedContactSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_sections';
  info: {
    description: '';
    displayName: 'ContactSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCoordinates extends Struct.ComponentSchema {
  collectionName: 'components_shared_coordinates';
  info: {
    displayName: 'Coordinates';
  };
  attributes: {
    lat: Schema.Attribute.Decimal;
    lng: Schema.Attribute.Decimal;
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

export interface SharedCountyOption extends Struct.ComponentSchema {
  collectionName: 'components_shared_county_options';
  info: {
    displayName: 'CountyOption';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface SharedFieldData extends Struct.ComponentSchema {
  collectionName: 'components_shared_field_data';
  info: {
    description: '';
    displayName: 'FieldData';
  };
  attributes: {
    formatWarning: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
    warning: Schema.Attribute.String;
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

export interface SharedFinancingProgramSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_financing_program_sections';
  info: {
    description: '';
    displayName: 'FinancingProgramSection';
    icon: 'bulletList';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.scroll-to', false>;
    cards: Schema.Attribute.Component<'shared.cards', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedFormSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_form_sections';
  info: {
    displayName: 'FormSection';
    icon: 'brush';
  };
  attributes: {
    address: Schema.Attribute.String;
    contactForm: Schema.Attribute.Component<'shared.contact-form', false>;
    description: Schema.Attribute.RichText;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.Component<'shared.phone', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedFormSection2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_form_section2s';
  info: {
    description: '';
    displayName: 'FormSection2';
    icon: 'brush';
  };
  attributes: {
    contactForm: Schema.Attribute.Component<'shared.contact-form', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedGoogleRate extends Struct.ComponentSchema {
  collectionName: 'components_shared_google_rates';
  info: {
    displayName: 'GoogleRate';
  };
  attributes: {
    comments: Schema.Attribute.Component<'shared.comment', true>;
    googleLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    label: Schema.Attribute.String;
    subLabel: Schema.Attribute.String;
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

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    description: '';
    displayName: 'image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedImagesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_images_sections';
  info: {
    displayName: 'ImagesSection';
    icon: 'landscape';
  };
  attributes: {
    slider: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedInformationSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_information_sections';
  info: {
    description: '';
    displayName: 'InformationSection';
    icon: 'file';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.scroll-to', false>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rates: Schema.Attribute.Component<'shared.google-rate', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedInformationSection2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_information_section2s';
  info: {
    description: '';
    displayName: 'InformationSection2';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedLinkList extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_lists';
  info: {
    displayName: 'LinkList';
    icon: 'bulletList';
  };
  attributes: {
    Links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLinksSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_links_sections';
  info: {
    description: '';
    displayName: 'LinksSection';
    icon: 'earth';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link-list', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    social: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    label: Schema.Attribute.String;
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

export interface SharedMapData extends Struct.ComponentSchema {
  collectionName: 'components_shared_map_data';
  info: {
    description: '';
    displayName: 'MapData';
  };
  attributes: {
    center: Schema.Attribute.Component<'shared.coordinates', false>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    mapLocations: Schema.Attribute.Component<'shared.list', true>;
    zoom: Schema.Attribute.Integer;
  };
}

export interface SharedMapSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_map_sections';
  info: {
    displayName: 'MapSection';
    icon: 'pinMap';
  };
  attributes: {
    description: Schema.Attribute.String;
    mapsData: Schema.Attribute.Component<'shared.map-data', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface SharedOptionSection2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_option_section2s';
  info: {
    description: '';
    displayName: 'OptionsSection2';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    options: Schema.Attribute.Component<'shared.options', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedOptions extends Struct.ComponentSchema {
  collectionName: 'components_shared_options';
  info: {
    description: '';
    displayName: 'options';
  };
  attributes: {
    description: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedOptionsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_options_sections';
  info: {
    description: '';
    displayName: ' OptionsSection';
  };
  attributes: {
    descriptionWithLink: Schema.Attribute.Text;
    middleDescription: Schema.Attribute.Text;
    options: Schema.Attribute.Component<'shared.options', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    topDescription: Schema.Attribute.Text;
  };
}

export interface SharedOptionsSection3 extends Struct.ComponentSchema {
  collectionName: 'components_shared_options_section3s';
  info: {
    description: '';
    displayName: 'OptionsSection3';
    icon: 'apps';
  };
  attributes: {
    bottomDescription: Schema.Attribute.Text;
    countyOptions: Schema.Attribute.Component<'shared.county-option', true>;
    description: Schema.Attribute.RichText;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface SharedScrollTo extends Struct.ComponentSchema {
  collectionName: 'components_shared_scroll_tos';
  info: {
    description: '';
    displayName: 'ScrollTo';
    icon: 'arrowDown';
  };
  attributes: {
    cssSelector: Schema.Attribute.String;
    label: Schema.Attribute.String;
    position: Schema.Attribute.String;
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

export interface SharedServiceModule extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_modules';
  info: {
    displayName: 'serviceModule';
  };
  attributes: {
    top: Schema.Attribute.Component<'shared.top-section', true>;
  };
}

export interface SharedServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.link', false>;
    cards: Schema.Attribute.Component<'shared.cards', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
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

export interface SharedTextList extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_lists';
  info: {
    description: '';
    displayName: 'TextList';
    icon: 'bulletList';
  };
  attributes: {
    position: Schema.Attribute.String;
    values: Schema.Attribute.String;
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

export interface SharedTopSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_top_sections';
  info: {
    description: '';
    displayName: 'TopSection';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Component<
      'shared.background-image',
      false
    >;
    benefits: Schema.Attribute.Component<'shared.text-list', true>;
    button: Schema.Attribute.Component<'shared.scroll-to', false>;
    description: Schema.Attribute.RichText;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titlePosition: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.background-image': SharedBackgroundImage;
      'shared.blog-card': SharedBlogCard;
      'shared.blog-section': SharedBlogSection;
      'shared.buttonbar': SharedButtonbar;
      'shared.card-container': SharedCardContainer;
      'shared.cards': SharedCards;
      'shared.cities': SharedCities;
      'shared.comment': SharedComment;
      'shared.contact-form': SharedContactForm;
      'shared.contact-section': SharedContactSection;
      'shared.coordinates': SharedCoordinates;
      'shared.counties': SharedCounties;
      'shared.county-option': SharedCountyOption;
      'shared.email': SharedEmail;
      'shared.facebook': SharedFacebook;
      'shared.field-data': SharedFieldData;
      'shared.financing': SharedFinancing;
      'shared.financing-program-section': SharedFinancingProgramSection;
      'shared.form-section': SharedFormSection;
      'shared.form-section2': SharedFormSection2;
      'shared.google-rate': SharedGoogleRate;
      'shared.hero': SharedHero;
      'shared.image': SharedImage;
      'shared.images-section': SharedImagesSection;
      'shared.information-section': SharedInformationSection;
      'shared.information-section2': SharedInformationSection2;
      'shared.link': SharedLink;
      'shared.link-list': SharedLinkList;
      'shared.links-section': SharedLinksSection;
      'shared.list': SharedList;
      'shared.locations': SharedLocations;
      'shared.map-data': SharedMapData;
      'shared.map-section': SharedMapSection;
      'shared.media': SharedMedia;
      'shared.nav-bar': SharedNavBar;
      'shared.option-section2': SharedOptionSection2;
      'shared.options': SharedOptions;
      'shared.options-section': SharedOptionsSection;
      'shared.options-section3': SharedOptionsSection3;
      'shared.phone': SharedPhone;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.scroll-to': SharedScrollTo;
      'shared.seo': SharedSeo;
      'shared.service-module': SharedServiceModule;
      'shared.services': SharedServices;
      'shared.slider': SharedSlider;
      'shared.text-list': SharedTextList;
      'shared.top-bar': SharedTopBar;
      'shared.top-section': SharedTopSection;
    }
  }
}
