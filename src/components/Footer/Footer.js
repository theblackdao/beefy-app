import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.column}>
        <div className={classes.title}>Resources</div>
        <a
          href="https://docs.blk.finance/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-book ${classes.linkIcon}`}></i>
          <span>whitepaper</span>
        </a>
        <a
          href="https://github.com/beefyfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-github ${classes.linkIcon}`}></i>
          <span>Github</span>
        </a>
      </div>

      <div className={classes.column}>
        <div className={classes.title}>Contact Us</div>
        <a
          href="mailto:support@blk.finance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <span>support@blk.finance</span>
        </a>
      </div>

      <div className={classes.column}>
        <div className={classes.title}>{t('socials')}</div>
        <a
          href="https://twitter.com/beefyfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-twitter ${classes.linkIcon}`}></i>

          <span>twitter</span>
        </a>
        <a
          href="https://www.facebook.com/BLKDAO"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-facebook ${classes.linkIcon}`}></i>

          <span>facebook</span>
        </a>
        <a
          href="https://www.instagram.com/theblackdao"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-instagram ${classes.linkIcon}`}></i>
          <span>instagram</span>
        </a>
        <a
          href="https://github.com/beefyfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-github ${classes.linkIcon}`}></i>
          <span>github</span>
        </a>
      </div>
    </div>
  );
};

export default memo(Footer);
