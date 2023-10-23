import React, { ReactFragment } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';

import AccountCircle from '#src/icons/AccountCircle';
import SearchBar, { Props as SearchBarProps } from '#components/SearchBar/SearchBar';
import Menu from '#src/icons/Menu';
import SearchIcon from '#src/icons/Search';
import CloseIcon from '#src/icons/Close';
import Button from '#components/Button/Button';
import Popover from '#components/Popover/Popover';
import UserMenu from '#components/UserMenu/UserMenu';
import useBreakpoint, { Breakpoint } from '#src/hooks/useBreakpoint';
import IconButton from '#components/IconButton/IconButton';
import Panel from '#components/Panel/Panel';
import type { Profile } from '#types/account';
import ProfileCircle from '#src/icons/ProfileCircle';
import type { AccessModel } from '#types/Config';

type TypeHeader = 'static' | 'fixed';

type Props = {
  headerType?: TypeHeader;
  onMenuButtonClick: () => void;
  logoSrc?: string | null;
  searchBarProps: SearchBarProps;
  searchEnabled: boolean;
  searchActive: boolean;
  onSearchButtonClick?: () => void;
  onCloseSearchButtonClick?: () => void;
  onLoginButtonClick?: () => void;
  onSignUpButtonClick?: () => void;
  openUserMenu: () => void;
  closeUserMenu: () => void;
  children?: ReactFragment;
  isLoggedIn: boolean;
  userMenuOpen: boolean;
  canLogin: boolean;
  showPaymentsMenuItem: boolean;
  currentProfile?: Profile;
  profiles?: Profile[];
  profilesEnabled?: boolean;
  accessModel?: AccessModel;
};

const Header: React.FC<Props> = ({
  children,
  onMenuButtonClick,
  searchBarProps,
  searchActive,
  onSearchButtonClick,
  searchEnabled,
  onLoginButtonClick,
  onCloseSearchButtonClick,
  onSignUpButtonClick,
  isLoggedIn,
  userMenuOpen,
  openUserMenu,
  closeUserMenu,
  canLogin = false,
  showPaymentsMenuItem,
  currentProfile,
  profiles,
  profilesEnabled,
  accessModel,
}) => {
  const { t } = useTranslation('menu');
  const breakpoint = useBreakpoint();

  const renderSearch = () => {
    if (!searchEnabled) return null;

    return searchActive ? (
      <div className={styles.searchContainer}>
        <SearchBar {...searchBarProps} />
        <IconButton
          className={styles.iconButton}
          aria-label="Close search"
          onClick={() => {
            if (onCloseSearchButtonClick) {
              onCloseSearchButtonClick();
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
    ) : (
      <IconButton
        className={classNames(styles.iconButton, styles.actionButton)}
        aria-label="Open search"
        onClick={() => {
          if (onSearchButtonClick) {
            onSearchButtonClick();
          }
        }}
      >
        <SearchIcon />
      </IconButton>
    );
  };

  const renderUserActions = () => {
    if (!canLogin || breakpoint <= Breakpoint.sm) return null;

    return isLoggedIn ? (
      <React.Fragment>
        <IconButton className={classNames(styles.iconButton, styles.actionButton)} aria-label={t('open_user_menu')} onClick={openUserMenu}>
          {currentProfile?.avatar_url ? <ProfileCircle src={currentProfile.avatar_url} alt={currentProfile.name} /> : <AccountCircle />}
        </IconButton>
        <Popover isOpen={userMenuOpen} onClose={closeUserMenu}>
          <Panel>
            <UserMenu
              onClick={closeUserMenu}
              showPaymentsItem={showPaymentsMenuItem}
              small
              accessModel={accessModel}
              currentProfile={currentProfile}
              profilesEnabled={profilesEnabled}
              profiles={profiles}
            />
          </Panel>
        </Popover>
      </React.Fragment>
    ) : (
      <div className={styles.buttonContainer}>
        <Button onClick={onLoginButtonClick} label={t('sign_in')} />
        <Button variant="contained" color="primary" onClick={onSignUpButtonClick} label={t('sign_up')} />
      </div>
    );
  };

  return (
    <header className={styles.container}>
      <div className={styles.menu}>
        <IconButton className={styles.iconButton} aria-label={t('open_menu')} onClick={onMenuButtonClick}>
          <Menu />
        </IconButton>
      </div>
      <nav className={styles.nav} aria-label="menu">
        {children}
      </nav>
      <div className={styles.actions}>
        {renderSearch()}
        {renderUserActions()}
      </div>
    </header>
  );
};
export default Header;
